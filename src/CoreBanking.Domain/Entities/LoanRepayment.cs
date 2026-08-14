namespace CoreBanking.Domain.Entities;

public class LoanRepayment
{
    public Guid Id { get; set; }
    public Guid LoanId { get; set; }
    public decimal Amount { get; set; }
    public decimal PrincipalAmount { get; set; }
    public decimal InterestAmount { get; set; }
    public DateTime DueDate { get; set; }
    public DateTime? PaidAt { get; set; }

    // Navigation properties
    public Loan Loan { get; set; } = null!;
}
