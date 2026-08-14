using Microsoft.Extensions.Logging;

namespace CoreBanking.Infrastructure.Notifications;

public class EmailNotificationService
{
    private readonly ILogger<EmailNotificationService> _logger;

    public EmailNotificationService(ILogger<EmailNotificationService> logger)
    {
        _logger = logger;
    }

    // TODO: Implement actual email sending (e.g., via SendGrid, SMTP)
    // For now, log the email details
    public Task SendAsync(string to, string subject, string body)
    {
        _logger.LogInformation("[Mock Email] To: {To}, Subject: {Subject}, Body: {Body}", to, subject, body);
        return Task.CompletedTask;
    }
}
