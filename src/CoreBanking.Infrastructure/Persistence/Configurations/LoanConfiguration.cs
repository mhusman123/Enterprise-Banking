using CoreBanking.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoreBanking.Infrastructure.Persistence.Configurations;

public class LoanConfiguration : IEntityTypeConfiguration<Loan>
{
    public void Configure(EntityTypeBuilder<Loan> builder)
    {
        builder.HasKey(l => l.Id);
        builder.Property(l => l.Amount).HasPrecision(18, 2);
        builder.Property(l => l.InterestRate).HasPrecision(5, 2);
        builder.Property(l => l.MonthlyEmi).HasPrecision(18, 2);
        builder.Property(l => l.ApprovedBy).HasMaxLength(256);

        builder.HasOne(l => l.Account)
            .WithMany()
            .HasForeignKey(l => l.AccountId)
            .OnDelete(DeleteBehavior.SetNull);

        builder.HasMany(l => l.Repayments)
            .WithOne(r => r.Loan)
            .HasForeignKey(r => r.LoanId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
