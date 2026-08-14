using MediatR;

namespace CoreBanking.Application.Cards.Commands;

public record BlockCardCommand(Guid CardId) : IRequest<bool>;
