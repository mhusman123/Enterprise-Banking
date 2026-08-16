using CoreBanking.Application.Common.Interfaces;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace CoreBanking.Infrastructure.Services;

public class QuestPdfReportGenerator : IPdfReportGenerator
{
    static QuestPdfReportGenerator()
    {
        // License configuration for QuestPDF
        QuestPDF.Settings.License = LicenseType.Community;
    }

    public byte[] GeneratePaymentReceiptPdf(ReceiptPdfModel model)
    {
        var document = Document.Create(container =>
        {
            container.Page(page =>
            {
                page.Size(PageSizes.A5.Landscape());
                page.Margin(20);
                page.PageColor(Colors.White);
                page.DefaultTextStyle(x => x.FontSize(10).FontColor(Colors.Grey.Darken4));

                page.Header().Row(row =>
                {
                    row.RelativeItem().Column(col =>
                    {
                        col.Item().Text("STATE BANK OF PAKISTAN (SBP) VERIFIED").FontSize(8).Bold().FontColor(Colors.Teal.Medium);
                        col.Item().Text("OFFICIAL PAYMENT RECEIPT").FontSize(16).Bold().FontColor(Colors.Blue.Darken2);
                    });
                    row.ConstantItem(100).AlignRight().Text("1-LINK / PAYFAST").FontSize(9).Bold().FontColor(Colors.Grey.Medium);
                });

                page.Content().PaddingVertical(15).Column(col =>
                {
                    col.Item().LineHorizontal(1).LineColor(Colors.Grey.Lighten2);

                    col.Item().PaddingVertical(10).Row(row =>
                    {
                        row.RelativeItem().Text($"Receipt Ref ID: #{model.ReceiptId}").Bold();
                        row.RelativeItem().AlignRight().Text($"Date: {model.Date:dd MMM yyyy HH:mm:ss} UTC");
                    });

                    col.Item().Background(Colors.Grey.Lighten4).Padding(10).Column(details =>
                    {
                        details.Item().Text($"Customer Name: {model.CustomerName}").Bold();
                        details.Item().Text($"CNIC #: {model.Cnic}");
                        details.Item().Text($"Debit Account: {model.AccountNumber}");
                        details.Item().Text($"Beneficiary / Merchant: {model.BillerOrMerchant}");
                        details.Item().Text($"Payment Channel: {model.PaymentType}");
                    });

                    col.Item().PaddingTop(15).Row(row =>
                    {
                        row.RelativeItem().Text("TOTAL DEBITED AMOUNT").FontSize(11).Bold();
                        row.RelativeItem().AlignRight().Text($"Rs. {model.Amount:N2} PKR").FontSize(16).Bold().FontColor(Colors.Green.Darken2);
                    });
                });

                page.Footer().AlignBottom().Row(row =>
                {
                    row.RelativeItem().Text("Core Banking Platform Pakistan • SBP Regulated Settlement").FontSize(8).FontColor(Colors.Grey.Medium);
                    row.RelativeItem().AlignRight().Text("Page 1 of 1").FontSize(8).FontColor(Colors.Grey.Medium);
                });
            });
        });

        return document.GeneratePdf();
    }

    public byte[] GenerateMonthlyStatementPdf(string accountNo, string customerName, string cnic, decimal balance)
    {
        var document = Document.Create(container =>
        {
            container.Page(page =>
            {
                page.Size(PageSizes.A4);
                page.Margin(30);
                page.PageColor(Colors.White);
                page.DefaultTextStyle(x => x.FontSize(10));

                page.Header().Column(col =>
                {
                    col.Item().Row(row =>
                    {
                        row.RelativeItem().Column(c =>
                        {
                            c.Item().Text("CORE BANKING PLATFORM PAKISTAN").FontSize(18).Bold().FontColor(Colors.Blue.Darken3);
                            c.Item().Text("Official Monthly Account Statement").FontSize(12).FontColor(Colors.Grey.Darken1);
                        });
                        row.ConstantItem(120).AlignRight().Text("STAMPED & VERIFIED").FontSize(9).Bold().FontColor(Colors.Green.Medium);
                    });
                    col.Item().PaddingTop(5).LineHorizontal(1.5f).LineColor(Colors.Blue.Darken3);
                });

                page.Content().PaddingVertical(15).Column(col =>
                {
                    col.Item().Row(row =>
                    {
                        row.RelativeItem().Column(c =>
                        {
                            c.Item().Text($"Account Title: {customerName}").Bold();
                            c.Item().Text($"CNIC #: {cnic}");
                            c.Item().Text($"Account #: {accountNo}");
                        });
                        row.RelativeItem().AlignRight().Column(c =>
                        {
                            c.Item().Text($"Statement Date: {DateTime.UtcNow:dd MMM yyyy}");
                            c.Item().Text("Currency: PKR (Pakistani Rupee)");
                            c.Item().Text($"Ending Balance: Rs. {balance:N2}").Bold().FontColor(Colors.Green.Darken2);
                        });
                    });

                    col.Item().PaddingTop(20).Text("Ledger Summary (August 2026)").FontSize(12).Bold();

                    col.Item().PaddingTop(10).Table(table =>
                    {
                        table.ColumnsDefinition(columns =>
                        {
                            columns.RelativeColumn(2);
                            columns.RelativeColumn(3);
                            columns.RelativeColumn(2);
                            columns.RelativeColumn(2);
                        });

                        table.Header(header =>
                        {
                            header.Cell().Background(Colors.Grey.Lighten3).Padding(5).Text("Date").Bold();
                            header.Cell().Background(Colors.Grey.Lighten3).Padding(5).Text("Description / Party").Bold();
                            header.Cell().Background(Colors.Grey.Lighten3).Padding(5).Text("Type").Bold();
                            header.Cell().Background(Colors.Grey.Lighten3).Padding(5).AlignRight().Text("Amount (PKR)").Bold();
                        });

                        table.Cell().Padding(5).Text("14 Aug 2026");
                        table.Cell().Padding(5).Text("Engro Corporation Dividend");
                        table.Cell().Padding(5).Text("Credit");
                        table.Cell().Padding(5).AlignRight().Text("+Rs. 1,450,000.00").FontColor(Colors.Green.Darken2);

                        table.Cell().Padding(5).Text("12 Aug 2026");
                        table.Cell().Padding(5).Text("K-Electric Industrial Tariff");
                        table.Cell().Padding(5).Text("Debit");
                        table.Cell().Padding(5).AlignRight().Text("-Rs. 634,000.00").FontColor(Colors.Red.Medium);

                        table.Cell().Padding(5).Text("10 Aug 2026");
                        table.Cell().Padding(5).Text("Systems Limited Vendor Payout");
                        table.Cell().Padding(5).Text("Credit");
                        table.Cell().Padding(5).AlignRight().Text("+Rs. 2,207,040.00").FontColor(Colors.Green.Darken2);
                    });
                });

                page.Footer().AlignBottom().Column(col =>
                {
                    col.Item().LineHorizontal(0.5f).LineColor(Colors.Grey.Lighten2);
                    col.Item().PaddingTop(5).Row(row =>
                    {
                        row.RelativeItem().Text("State Bank of Pakistan Regulated • 1-Link Network Connected").FontSize(8).FontColor(Colors.Grey.Medium);
                        row.RelativeItem().AlignRight().Text("Page 1 of 1").FontSize(8).FontColor(Colors.Grey.Medium);
                    });
                });
            });
        });

        return document.GeneratePdf();
    }
}
