namespace CoreBanking.Application.Admin.DTOs;

public record AuditLogDto(
    Guid Id,
    string UserId,
    string Action,
    string EntityName,
    string? EntityId,
    string? Details,
    DateTime Timestamp);
