using MediatR;

namespace CoreBanking.Application.Accounts.Commands;

public record FreezeAccountCommand(Guid AccountId) : IRequest<bool>;
