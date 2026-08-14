using CoreBanking.Application.Admin.DTOs;
using MediatR;

namespace CoreBanking.Application.Admin.Queries;

public record GetAuditLogsQuery(
    int Page = 1,
    int PageSize = 50) : IRequest<List<AuditLogDto>>;
