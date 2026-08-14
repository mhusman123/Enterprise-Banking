namespace CoreBanking.Application.Cards.DTOs;

public record CardDto(
    Guid Id,
    string CardNumber,
    string CardHolderName,
    DateTime ExpiryDate,
    bool IsBlocked,
    string CardType);
