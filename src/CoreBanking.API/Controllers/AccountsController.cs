using CoreBanking.Application.Accounts.Commands;
using CoreBanking.Application.Accounts.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CoreBanking.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountsController : ControllerBase
{
    private readonly IMediator _mediator;

    public AccountsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> CreateAccount([FromBody] CreateAccountCommand command)
    {
        var accountId = await _mediator.Send(command);
        return CreatedAtAction(nameof(GetById), new { id = accountId }, accountId);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var account = await _mediator.Send(new GetAccountByIdQuery(id));
        return account is not null ? Ok(account) : NotFound();
    }

    [HttpGet("customer/{customerId:guid}")]
    public async Task<IActionResult> GetCustomerAccounts(Guid customerId)
    {
        var accounts = await _mediator.Send(new GetCustomerAccountsQuery(customerId));
        return Ok(accounts);
    }

    [HttpPut("{id:guid}/freeze")]
    public async Task<IActionResult> FreezeAccount(Guid id)
    {
        var result = await _mediator.Send(new FreezeAccountCommand(id));
        return result ? Ok() : BadRequest();
    }
}
