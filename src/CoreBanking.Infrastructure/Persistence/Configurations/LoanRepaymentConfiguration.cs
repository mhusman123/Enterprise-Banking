using CoreBanking.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoreBanking.Infrastructure.Persistence.Configurations;

public class LoanRepaymentConfiguration : IEntityTypeConfiguration<LoanRepayment>
{
    public void Configure(EntityTypeBuilder<LoanRepayment> builder)
    {
        builder.HasKey(r => r.Id);
        builder.Property(r => r.Amount).HasPrecision(18, 2);
        builder.Property(r => r.PrincipalAmount).HasPrecision(18, 2);
        builder.Property(r => r.InterestAmount).HasPrecision(18, 2);
    }
}
