using CoreBanking.Application.Common.Interfaces;

namespace CoreBanking.Infrastructure.Services;

public class PayFastSandboxService : IPayFastSandboxService
{
    public Task<PayFastCheckoutResponse> ProcessSandboxCheckoutAsync(PayFastCheckoutRequest request)
    {
        // Simulate PayFast / 1-Link Sandbox response with approval code
        var isApproved = request.Amount > 0 && !string.IsNullOrWhiteSpace(request.Pin);
        
        var response = new PayFastCheckoutResponse
        {
            Success = isApproved,
            TransactionId = $"PF-1LK-{Random.Shared.Next(10000000, 99999999)}",
            ApprovalCode = isApproved ? $"APPRV-{Random.Shared.Next(1000, 9999)}" : "DECLINED",
            Message = isApproved ? "PayFast Sandbox Payment Approved & Settled" : "Invalid PIN or zero amount",
            Timestamp = DateTime.UtcNow,
            Amount = request.Amount,
            MerchantName = string.IsNullOrWhiteSpace(request.MerchantName) ? "PayFast Sandbox Merchant" : request.MerchantName
        };

        return Task.FromResult(response);
    }
}
