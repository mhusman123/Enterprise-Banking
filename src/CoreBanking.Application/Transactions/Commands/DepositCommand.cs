using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Commands;

public record DepositCommand(
    Guid AccountId,
    decimal Amount,
    string Description) : IRequest<TransactionDto>;
