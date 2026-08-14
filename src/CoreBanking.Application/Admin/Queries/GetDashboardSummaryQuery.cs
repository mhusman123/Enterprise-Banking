using CoreBanking.Application.Admin.DTOs;
using MediatR;

namespace CoreBanking.Application.Admin.Queries;

public record GetDashboardSummaryQuery() : IRequest<DashboardSummaryDto>;
