using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Queries;

public record GetStatementQuery(
    Guid AccountId,
    DateTime? From,
    DateTime? To) : IRequest<StatementDto>;
