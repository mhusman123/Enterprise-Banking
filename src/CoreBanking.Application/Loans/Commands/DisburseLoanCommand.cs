using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public record DisburseLoanCommand(
    Guid LoanId,
    Guid AccountId) : IRequest<bool>;
