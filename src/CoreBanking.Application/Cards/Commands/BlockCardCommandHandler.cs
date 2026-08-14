using MediatR;

namespace CoreBanking.Application.Cards.Commands;

public class BlockCardCommandHandler : IRequestHandler<BlockCardCommand, bool>
{
    // TODO: Inject ICardRepository
    // TODO: Implement - find card, set IsBlocked = true, log audit, notify customer
    public Task<bool> Handle(BlockCardCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement BlockCard business logic");
    }
}
