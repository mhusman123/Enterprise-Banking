using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public class ApproveLoanCommandHandler : IRequestHandler<ApproveLoanCommand, bool>
{
    // TODO: Inject ILoanRepository
    // TODO: Implement - verify loan exists and is Pending, set status to Approved,
    //       record approver, log audit entry
    public Task<bool> Handle(ApproveLoanCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement ApproveLoan business logic");
    }
}
