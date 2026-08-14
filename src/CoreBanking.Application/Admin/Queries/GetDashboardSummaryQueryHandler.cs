using CoreBanking.Application.Admin.DTOs;
using MediatR;

namespace CoreBanking.Application.Admin.Queries;

public class GetDashboardSummaryQueryHandler : IRequestHandler<GetDashboardSummaryQuery, DashboardSummaryDto>
{
    // TODO: Inject IApplicationDbContext
    // TODO: Implement - aggregate counts and sums from database for dashboard
    public Task<DashboardSummaryDto> Handle(GetDashboardSummaryQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement GetDashboardSummary query logic");
    }
}
