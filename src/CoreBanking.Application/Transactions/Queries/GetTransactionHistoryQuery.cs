using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Queries;

public record GetTransactionHistoryQuery(
    Guid AccountId,
    int Page = 1,
    int PageSize = 20) : IRequest<List<TransactionDto>>;
