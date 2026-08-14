using CoreBanking.Domain.Enums;

namespace CoreBanking.Domain.Entities;

public class Loan
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public Guid? AccountId { get; set; }
    public decimal Amount { get; set; }
    public decimal InterestRate { get; set; }
    public int TermInMonths { get; set; }
    public decimal MonthlyEmi { get; set; }
    public LoanStatus Status { get; set; } = LoanStatus.Pending;
    public string? ApprovedBy { get; set; }
    public DateTime? DisbursedAt { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public Customer Customer { get; set; } = null!;
    public Account? Account { get; set; }
    public ICollection<LoanRepayment> Repayments { get; set; } = new List<LoanRepayment>();
}
