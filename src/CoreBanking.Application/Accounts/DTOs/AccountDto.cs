namespace CoreBanking.Application.Accounts.DTOs;

public record AccountDto(
    Guid Id,
    string AccountNumber,
    string AccountType,
    string Status,
    decimal Balance,
    string Currency,
    DateTime CreatedAt);
