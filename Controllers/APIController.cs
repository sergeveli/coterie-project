using Microsoft.AspNetCore.Mvc;

namespace coterie_project.Controllers;

[ApiController]
[Route("api")]
public class APIController : ControllerBase
{
    [HttpGet("Applications")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpPost("Applications")]

    public IEnumerable<Application> GetApplications()
    {
            Application[] apps =  {
                new Application {
                    BusinessName = "",
                    Industry = "",
                    Email = "",
                    AnnualSales = 9,
                    AnnualPayroll = 13,
                    Employees = 1300,
                    ZipCode = "",
                }
            };
                return apps;
    }
}
