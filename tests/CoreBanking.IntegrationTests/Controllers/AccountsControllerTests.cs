namespace CoreBanking.IntegrationTests.Controllers;

public class AccountsControllerTests
{
    [Fact]
    public async Task CreateAccount_ShouldReturnCreated()
    {
        // TODO: Implement - set up test server with WebApplicationFactory,
        //       send POST to /api/accounts, verify 201 response
        await Task.CompletedTask;
        Assert.True(true, "TODO: Implement integration test");
    }

    [Fact]
    public async Task GetAccountById_WithInvalidId_ShouldReturnNotFound()
    {
        // TODO: Implement - send GET with non-existent ID, verify 404
        await Task.CompletedTask;
        Assert.True(true, "TODO: Implement integration test");
    }
}
