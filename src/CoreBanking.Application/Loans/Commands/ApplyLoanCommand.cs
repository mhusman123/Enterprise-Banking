using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public record ApplyLoanCommand(
    Guid CustomerId,
    decimal Amount,
    decimal InterestRate,
    int TermInMonths) : IRequest<Guid>;
