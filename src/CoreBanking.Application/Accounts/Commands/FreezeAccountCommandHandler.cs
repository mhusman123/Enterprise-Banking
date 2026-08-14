using MediatR;

namespace CoreBanking.Application.Accounts.Commands;

public class FreezeAccountCommandHandler : IRequestHandler<FreezeAccountCommand, bool>
{
    // TODO: Inject IAccountRepository
    // TODO: Implement business logic - verify account exists, set status to Frozen,
    //       log audit entry, send notification to customer
    public Task<bool> Handle(FreezeAccountCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement FreezeAccount business logic");
    }
}
