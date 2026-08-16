namespace CoreBanking.Application.Common.Interfaces;

public class PayFastCheckoutRequest
{
    public string MerchantId { get; set; } = string.Empty;
    public string MerchantName { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string AccountNumber { get; set; } = string.Empty;
    public string Pin { get; set; } = string.Empty;
}

public class PayFastCheckoutResponse
{
    public bool Success { get; set; }
    public string TransactionId { get; set; } = string.Empty;
    public string ApprovalCode { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; }
    public decimal Amount { get; set; }
    public string MerchantName { get; set; } = string.Empty;
}

public interface IPayFastSandboxService
{
    Task<PayFastCheckoutResponse> ProcessSandboxCheckoutAsync(PayFastCheckoutRequest request);
}
