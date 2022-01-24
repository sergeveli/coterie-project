using Microsoft.AspNetCore.Mvc;
using System.Collections.Concurrent;

namespace coterie_project.Controllers;

[ApiController]
[Route("api")]
public class APIController : ControllerBase
{
    private static List<Application> APPLICATIONS = new List<Application>();

    private readonly ILogger<APIController> _logger;

    public APIController(ILogger<APIController> logger)
    {
        _logger = logger;
    }


    [HttpGet("Applications")]
    public IEnumerable<Application> GetApplications()
// {"BusinessName": "PRE", "Industry": "Money", "Email": "pre@pre.com", "AnnualSales": 1000000, "AnnualPayroll": 1000000000, "Employees": 13, "ZipCode": "11375"}
    {
        return APIController.APPLICATIONS;
    }

    [HttpPost("Applications")]
    public void PostNewApplication(Application app)
    {
        APIController.APPLICATIONS.Add(app);
    }
}
