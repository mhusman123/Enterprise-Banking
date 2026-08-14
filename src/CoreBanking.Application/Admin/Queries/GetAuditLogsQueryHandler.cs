using CoreBanking.Application.Admin.DTOs;
using MediatR;

namespace CoreBanking.Application.Admin.Queries;

public class GetAuditLogsQueryHandler : IRequestHandler<GetAuditLogsQuery, List<AuditLogDto>>
{
    // TODO: Inject IApplicationDbContext
    // TODO: Implement - fetch paginated audit logs, ordered by timestamp descending
    public Task<List<AuditLogDto>> Handle(GetAuditLogsQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement GetAuditLogs query logic");
    }
}
