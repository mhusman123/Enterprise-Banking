using CoreBanking.Application.Cards.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CoreBanking.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CardsController : ControllerBase
{
    private readonly IMediator _mediator;

    public CardsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("issue")]
    public async Task<IActionResult> IssueCard([FromBody] IssueCardCommand command)
    {
        var cardId = await _mediator.Send(command);
        return Ok(cardId);
    }

    [HttpPut("{id:guid}/block")]
    public async Task<IActionResult> BlockCard(Guid id)
    {
        var result = await _mediator.Send(new BlockCardCommand(id));
        return result ? Ok() : BadRequest();
    }
}
