namespace CoreBanking.Domain.Entities;

public class Card
{
    public Guid Id { get; set; }
    public Guid AccountId { get; set; }
    public string CardNumber { get; set; } = string.Empty;
    public string CardHolderName { get; set; } = string.Empty;
    public DateTime ExpiryDate { get; set; }
    public bool IsBlocked { get; set; }
    public string CardType { get; set; } = "Debit";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public Account Account { get; set; } = null!;
}
