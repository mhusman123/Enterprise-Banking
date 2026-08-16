using CoreBanking.Application.Common.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CoreBanking.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IJwtTokenGenerator _jwtTokenGenerator;

    public AuthController(IJwtTokenGenerator jwtTokenGenerator)
    {
        _jwtTokenGenerator = jwtTokenGenerator;
    }

    public class LoginRequest
    {
        public string EmailOrCnic { get; set; } = "usman@company.pk";
        public string Password { get; set; } = "Pakistan123!";
    }

    public class LoginResponse
    {
        public string Token { get; set; } = string.Empty;
        public string UserId { get; set; } = "USR-88492";
        public string FullName { get; set; } = "Muhammad Usman";
        public string Email { get; set; } = "usman@company.pk";
        public string Cnic { get; set; } = "42101-9876543-1";
        public string Role { get; set; } = "Customer";
        public DateTime ExpiresAt { get; set; } = DateTime.UtcNow.AddHours(24);
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        // Demo authentication logic for Pakistani corporate user
        var role = request.EmailOrCnic.Contains("admin", StringComparison.OrdinalIgnoreCase) ? "Admin" 
                 : request.EmailOrCnic.Contains("manager", StringComparison.OrdinalIgnoreCase) ? "BranchManager" 
                 : "Customer";

        var token = _jwtTokenGenerator.GenerateToken(
            userId: "USR-88492",
            fullName: "Muhammad Usman",
            email: "usman@company.pk",
            cnic: "42101-9876543-1",
            role: role);

        return Ok(new LoginResponse
        {
            Token = token,
            Role = role
        });
    }

    [HttpGet("me")]
    public IActionResult GetMe()
    {
        return Ok(new
        {
            UserId = "USR-88492",
            FullName = "Muhammad Usman",
            Cnic = "42101-9876543-1",
            Roles = new[] { "Customer", "CorporateAdmin" },
            Status = "Verified SBP",
            PrimaryAccount = "PK36 HABB 0001 2345 6789 4892"
        });
    }
}
