using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public record ApproveLoanCommand(
    Guid LoanId,
    string ApprovedBy) : IRequest<bool>;
