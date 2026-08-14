using MediatR;

namespace CoreBanking.Application.Loans.Commands;

public class ApplyLoanCommandHandler : IRequestHandler<ApplyLoanCommand, Guid>
{
    // TODO: Inject ILoanRepository, IApplicationDbContext
    // TODO: Implement - validate customer, calculate EMI using formula:
    //       EMI = P * r * (1+r)^n / ((1+r)^n - 1), create loan with Pending status
    public Task<Guid> Handle(ApplyLoanCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement ApplyLoan business logic");
    }
}
