using CoreBanking.API.Hubs;
using CoreBanking.Application.Common.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace CoreBanking.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PaymentsController : ControllerBase
{
    private readonly IPayFastSandboxService _payFastSandboxService;
    private readonly IPdfReportGenerator _pdfReportGenerator;
    private readonly IHubContext<NotificationHub, INotificationClient> _hubContext;

    public PaymentsController(
        IPayFastSandboxService payFastSandboxService,
        IPdfReportGenerator pdfReportGenerator,
        IHubContext<NotificationHub, INotificationClient> hubContext)
    {
        _payFastSandboxService = payFastSandboxService;
        _pdfReportGenerator = pdfReportGenerator;
        _hubContext = hubContext;
    }

    [HttpPost("payfast/checkout")]
    public async Task<IActionResult> ProcessCheckout([FromBody] PayFastCheckoutRequest request)
    {
        var result = await _payFastSandboxService.ProcessSandboxCheckoutAsync(request);

        if (result.Success)
        {
            // Trigger instant real-time SignalR live notification alert
            await _hubContext.Clients.All.ReceiveTransactionAlert(
                txId: result.TransactionId,
                amount: result.Amount,
                party: result.MerchantName,
                status: "Approved"
            );

            await _hubContext.Clients.All.ReceiveNotification(
                title: "1-Link / PayFast Debit Alert",
                message: $"Rs. {result.Amount:N2} debited for {result.MerchantName} (Approval: {result.ApprovalCode})",
                type: "Debit",
                timestamp: DateTime.UtcNow
            );
        }

        return Ok(result);
    }

    [HttpPost("receipt/pdf")]
    public IActionResult DownloadReceipt([FromBody] ReceiptPdfModel model)
    {
        if (string.IsNullOrWhiteSpace(model.CustomerName)) model.CustomerName = "Muhammad Usman";
        if (string.IsNullOrWhiteSpace(model.Cnic)) model.Cnic = "42101-9876543-1";
        if (string.IsNullOrWhiteSpace(model.ReceiptId)) model.ReceiptId = $"PF-1LK-{Random.Shared.Next(100000, 999999)}";

        var pdfBytes = _pdfReportGenerator.GeneratePaymentReceiptPdf(model);
        return File(pdfBytes, "application/pdf", $"Payment_Receipt_{model.ReceiptId}.pdf");
    }

    [HttpGet("statement/pdf")]
    public IActionResult DownloadStatement(
        [FromQuery] string accountNo = "PK36 HABB 0001 2345 6789 4892",
        [FromQuery] string customerName = "Muhammad Usman",
        [FromQuery] string cnic = "42101-9876543-1",
        [FromQuery] decimal balance = 27932075.00m)
    {
        var pdfBytes = _pdfReportGenerator.GenerateMonthlyStatementPdf(accountNo, customerName, cnic, balance);
        return File(pdfBytes, "application/pdf", $"SBP_Statement_{accountNo.Replace(" ", "_")}.pdf");
    }
}
