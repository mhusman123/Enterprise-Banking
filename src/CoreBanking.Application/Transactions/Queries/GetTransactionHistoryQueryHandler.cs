using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Queries;

public class GetTransactionHistoryQueryHandler : IRequestHandler<GetTransactionHistoryQuery, List<TransactionDto>>
{
    // TODO: Inject ITransactionRepository
    // TODO: Implement - fetch paginated transactions for account, map to DTOs
    public Task<List<TransactionDto>> Handle(GetTransactionHistoryQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement GetTransactionHistory query logic");
    }
}
