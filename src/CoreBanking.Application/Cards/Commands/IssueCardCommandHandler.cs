using MediatR;

namespace CoreBanking.Application.Cards.Commands;

public class IssueCardCommandHandler : IRequestHandler<IssueCardCommand, Guid>
{
    // TODO: Inject ICardRepository, IAccountRepository
    // TODO: Implement - verify account exists and is active,
    //       generate card number (masked), set expiry date, save card
    public Task<Guid> Handle(IssueCardCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement IssueCard business logic");
    }
}
