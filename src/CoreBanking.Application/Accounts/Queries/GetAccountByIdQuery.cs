using CoreBanking.Application.Accounts.DTOs;
using MediatR;

namespace CoreBanking.Application.Accounts.Queries;

public record GetAccountByIdQuery(Guid AccountId) : IRequest<AccountDto?>;
