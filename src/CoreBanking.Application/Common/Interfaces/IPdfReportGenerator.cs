namespace CoreBanking.Application.Common.Interfaces;

public class ReceiptPdfModel
{
    public string ReceiptId { get; set; } = string.Empty;
    public string CustomerName { get; set; } = string.Empty;
    public string Cnic { get; set; } = string.Empty;
    public string BillerOrMerchant { get; set; } = string.Empty;
    public string AccountNumber { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string PaymentType { get; set; } = "1-Link / PayFast";
    public DateTime Date { get; set; } = DateTime.UtcNow;
}

public interface IPdfReportGenerator
{
    byte[] GeneratePaymentReceiptPdf(ReceiptPdfModel model);
    byte[] GenerateMonthlyStatementPdf(string accountNo, string customerName, string cnic, decimal balance);
}
