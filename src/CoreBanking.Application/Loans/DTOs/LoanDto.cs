namespace CoreBanking.Application.Loans.DTOs;

public record LoanDto(
    Guid Id,
    decimal Amount,
    decimal InterestRate,
    int TermInMonths,
    decimal MonthlyEmi,
    string Status,
    DateTime CreatedAt);
