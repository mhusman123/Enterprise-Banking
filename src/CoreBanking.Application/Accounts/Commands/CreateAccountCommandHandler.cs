using MediatR;

namespace CoreBanking.Application.Accounts.Commands;

public class CreateAccountCommandHandler : IRequestHandler<CreateAccountCommand, Guid>
{
    // TODO: Inject IApplicationDbContext and IAccountRepository
    // TODO: Implement business logic - validate customer exists, generate account number,
    //       create account entity, set initial balance, save to database
    public Task<Guid> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement CreateAccount business logic");
    }
}
