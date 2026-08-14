using MediatR;

namespace CoreBanking.Application.Accounts.Commands;

public record CreateAccountCommand(
    Guid CustomerId,
    string AccountType,
    string Currency,
    decimal InitialDeposit) : IRequest<Guid>;
