// Problem 1   
let employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
  ];
  
  console.log("// Problem 1");
  console.log(employees);
  
  // Problem 2
  let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("// Problem 2");
  console.log(company);
  

  // Problem 3 
  const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
  company.employees.push(newEmployee);
  
  console.log("// Problem 3");
  console.log(company);
  
  // Problem 4
  let totalSalary = company.employees.reduce((total, emp) => total + emp.salary, 0);
  
  console.log("// Problem 4");
  console.log("Total Salary:", totalSalary);
  
  // Problem 5
  function applyRaises(company) {
    company.employees.forEach(emp => {
      if (emp.raiseEligible) {
        emp.salary *= 1.10;
        emp.raiseEligible = false;
        
      }
    });
  }
  
  applyRaises(company);
  
  console.log("// Problem 5");
  console.log(company);
  
  // Problem 6
  const wfhEmployees = ['Anna', 'Sam'];
  
  company.employees.forEach(emp => {
    emp.wfh = wfhEmployees.includes(emp.firstName);
  });
  
  console.log("// Problem 6");
  console.log(company);
  