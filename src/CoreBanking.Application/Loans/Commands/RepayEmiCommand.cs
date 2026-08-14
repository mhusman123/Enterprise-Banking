using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public record RepayEmiCommand(
    Guid LoanId,
    decimal Amount) : IRequest<bool>;
