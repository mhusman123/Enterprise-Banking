using CoreBanking.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoreBanking.Infrastructure.Persistence.Configurations;

public class CardConfiguration : IEntityTypeConfiguration<Card>
{
    public void Configure(EntityTypeBuilder<Card> builder)
    {
        builder.HasKey(c => c.Id);
        builder.HasIndex(c => c.CardNumber).IsUnique();
        builder.Property(c => c.CardNumber).HasMaxLength(19).IsRequired();
        builder.Property(c => c.CardHolderName).HasMaxLength(200).IsRequired();
        builder.Property(c => c.CardType).HasMaxLength(20);
    }
}
