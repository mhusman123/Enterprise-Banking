using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Commands;

public record WithdrawCommand(
    Guid AccountId,
    decimal Amount,
    string Description) : IRequest<TransactionDto>;
