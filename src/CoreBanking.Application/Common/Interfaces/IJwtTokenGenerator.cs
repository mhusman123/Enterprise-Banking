namespace CoreBanking.Application.Common.Interfaces;

public interface IJwtTokenGenerator
{
    string GenerateToken(string userId, string fullName, string email, string cnic, string role);
}
