using CoreBanking.Application.Accounts.DTOs;
using MediatR;

namespace CoreBanking.Application.Accounts.Queries;

public class GetCustomerAccountsQueryHandler : IRequestHandler<GetCustomerAccountsQuery, List<AccountDto>>
{
    // TODO: Inject IAccountRepository
    // TODO: Implement - fetch all accounts for customer, map to DTOs
    public Task<List<AccountDto>> Handle(GetCustomerAccountsQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement GetCustomerAccounts query logic");
    }
}
