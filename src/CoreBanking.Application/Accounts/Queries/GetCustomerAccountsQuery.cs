using CoreBanking.Application.Accounts.DTOs;
using MediatR;

namespace CoreBanking.Application.Accounts.Queries;

public record GetCustomerAccountsQuery(Guid CustomerId) : IRequest<List<AccountDto>>;
