using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Commands;

public record TransferCommand(
    Guid FromAccountId,
    Guid ToAccountId,
    decimal Amount,
    string Description) : IRequest<TransactionDto>;
