using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public class RepayEmiCommandHandler : IRequestHandler<RepayEmiCommand, bool>
{
    // TODO: Inject ILoanRepository
    // TODO: Implement - find next unpaid repayment, mark as paid,
    //       check if all repayments are paid and close loan if so
    public Task<bool> Handle(RepayEmiCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement RepayEmi business logic");
    }
}
