# coterie-project

This a project utilizing custom built .NET Core APIs on the backend and React-Redux on the frontend.
The backend APIs have been tested using curl commands and all work. The purpose of the APIs were to create and display profiles that included a business name, industry, email address, annual sales, number of employees, annual payroll, and zip code. However, issues arose when connecting the front to the back. A consistent CORS error appeared within console and prevented the app to function as intended. After examining Microsoft's documentation for CORS as well as React's and attempting to debug over the course of the past 48 hours, this is the code as it currently stands. I am open to any discussions, feedback and questions. 

POSTing and GETting JSON data can be tested by navigating into the project file where the backend resides, opening a terminal and entering the following command: 

curl -X POST http://localhost:5273/api/Applications
   -H 'Content-Type: application/json'
   -d '{"BusinessName": "PRE", "Industry": "Money", "Email": "pre@pre.com", "AnnualSales": 1000000, "AnnualPayroll": 1000000000, "Employees": 13, "ZipCode": "11375"}'

curl http://localhost:5273/api/Applications
   -H "Accept: application/json" 




Thank You.