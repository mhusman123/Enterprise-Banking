using Microsoft.Extensions.Configuration;

namespace CoreBanking.Infrastructure.Identity;

public class JwtTokenService
{
    private readonly IConfiguration _configuration;

    public JwtTokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    // TODO: Implement JWT token generation using System.IdentityModel.Tokens.Jwt
    // TODO: Read secret key, issuer, audience from configuration
    public string GenerateToken(string userId, string email, string role)
    {
        throw new NotImplementedException("TODO: Implement JWT token generation");
    }

    // TODO: Implement token validation
    public bool ValidateToken(string token)
    {
        throw new NotImplementedException("TODO: Implement JWT token validation");
    }
}
