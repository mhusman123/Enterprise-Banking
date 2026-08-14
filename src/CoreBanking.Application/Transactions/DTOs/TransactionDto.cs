namespace CoreBanking.Application.Transactions.DTOs;

public record TransactionDto(
    Guid Id,
    string TransactionType,
    decimal Amount,
    string Description,
    string ReferenceNumber,
    decimal BalanceBefore,
    decimal BalanceAfter,
    DateTime CreatedAt);
