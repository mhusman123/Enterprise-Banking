using CoreBanking.Application.Accounts.DTOs;
using MediatR;

namespace CoreBanking.Application.Accounts.Queries;

public class GetAccountByIdQueryHandler : IRequestHandler<GetAccountByIdQuery, AccountDto?>
{
    // TODO: Inject IAccountRepository
    // TODO: Implement - fetch account by ID, map to DTO
    public Task<AccountDto?> Handle(GetAccountByIdQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement GetAccountById query logic");
    }
}
