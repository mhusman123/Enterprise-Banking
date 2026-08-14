using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public class DisburseLoanCommandHandler : IRequestHandler<DisburseLoanCommand, bool>
{
    // TODO: Inject ILoanRepository, IAccountRepository, ITransactionRepository
    // TODO: Implement - verify loan is Approved, credit amount to account,
    //       create transaction record, generate repayment schedule,
    //       set status to Disbursed, set DisbursedAt
    public Task<bool> Handle(DisburseLoanCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement DisburseLoan business logic");
    }
}
