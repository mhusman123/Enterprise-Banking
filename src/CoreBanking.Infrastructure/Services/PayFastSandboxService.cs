using CoreBanking.Application.Common.Interfaces;
using Microsoft.Extensions.Configuration;

namespace CoreBanking.Infrastructure.Services;

public class PayFastSandboxService : IPayFastSandboxService
{
    private readonly IConfiguration _configuration;

    public PayFastSandboxService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public Task<PayFastCheckoutResponse> ProcessSandboxCheckoutAsync(PayFastCheckoutRequest request)
    {
        var merchantId = _configuration["PayFast:MerchantId"] ?? "10043702";
        var merchantKey = _configuration["PayFast:MerchantKey"] ?? "d7nxjs2n7qdk6";
        var sandboxUrl = _configuration["PayFast:SandboxUrl"] ?? "https://sandbox.payfast.co.za/eng/process";

        var isApproved = request.Amount > 0 && !string.IsNullOrWhiteSpace(request.Pin);
        var txId = $"PF-{merchantId}-{Random.Shared.Next(100000, 999999)}";
        var approvalCode = isApproved ? $"APPRV-{Random.Shared.Next(1000, 9999)}" : "DECLINED";

        var response = new PayFastCheckoutResponse
        {
            Success = isApproved,
            TransactionId = txId,
            ApprovalCode = approvalCode,
            Message = isApproved 
                ? $"PayFast Sandbox Payment Approved via Merchant #{merchantId} ({sandboxUrl})" 
                : "Invalid PIN or amount specified",
            Timestamp = DateTime.UtcNow,
            Amount = request.Amount,
            MerchantName = string.IsNullOrWhiteSpace(request.MerchantName) ? $"PayFast Merchant ({merchantId})" : request.MerchantName
        };

        return Task.FromResult(response);
    }
}
