using Microsoft.AspNetCore.Mvc;

namespace coterie_project.Controllers;

[ApiController]
[Route("api")]
public class APIController : ControllerBase

{
    [HttpGet("Applications")]
    public IEnumerable<Application> GetApplications()
// {'BusinessName': 'PRE', 'Industry': 'Money', 'Email': 'pre@pre.com', 'AnnualSales': 1000000, 'AnnualPayroll': 1000000000, 'Employees': 13, 'ZipCode': '11375'}
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

    [HttpPost("Applications")]
    public void SaveApplication(Application app)(
        
    )
}
