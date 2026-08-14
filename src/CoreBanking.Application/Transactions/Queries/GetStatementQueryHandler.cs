using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Queries;

public class GetStatementQueryHandler : IRequestHandler<GetStatementQuery, StatementDto>
{
    // TODO: Inject IAccountRepository, ITransactionRepository
    // TODO: Implement - fetch account, get transactions in date range, map to DTO
    public Task<StatementDto> Handle(GetStatementQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement GetStatement query logic");
    }
}
