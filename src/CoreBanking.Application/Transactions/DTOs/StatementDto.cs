namespace CoreBanking.Application.Transactions.DTOs;

public record StatementDto(
    string AccountNumber,
    decimal CurrentBalance,
    List<TransactionDto> Transactions);
