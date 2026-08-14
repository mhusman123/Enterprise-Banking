namespace CoreBanking.Application.Admin.DTOs;

public record DashboardSummaryDto(
    int TotalCustomers,
    int TotalAccounts,
    decimal TotalDeposits,
    int ActiveLoans,
    int PendingLoans);
