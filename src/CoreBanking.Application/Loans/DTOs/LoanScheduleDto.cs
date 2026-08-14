namespace CoreBanking.Application.Loans.DTOs;

public record LoanScheduleDto(
    Guid LoanId,
    List<LoanRepaymentDto> Schedule);

public record LoanRepaymentDto(
    int InstallmentNumber,
    decimal PrincipalAmount,
    decimal InterestAmount,
    decimal TotalAmount,
    DateTime DueDate,
    bool IsPaid);
