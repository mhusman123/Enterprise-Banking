using MediatR;

namespace CoreBanking.Application.Cards.Commands;

public record IssueCardCommand(
    Guid AccountId,
    string CardHolderName,
    string CardType) : IRequest<Guid>;
