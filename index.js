const inquirer = require('inquirer');

const viewDepartments = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role?',
        validate: overallInput => {
          if (overallInput) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      },
      {
        type:'confirm',
        name: 'View Department',
        message: 'Would you like to view all departments?',
        defaut: true
      }
    ])
  }

const viewRoles = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role?',
        validate: overallInput => {
          if (overallInput) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      },
      {
        type:'confirm',
        name: 'View Roles',
        message: 'Would you like to view all Roles?',
        defaut: true
      }
    ])
  }
  const viewEmployees = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role?',
        validate: overallInput => {
          if (overallInput) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      },
      {
        type:'confirm',
        name: 'View Employees',
        message: 'Would you like to view all Employees?',
        defaut: true
      }
    ])
  }
  
  const addDepartment = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role?',
        validate: overallInput => {
          if (overallInput) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      },
      {
        type:'confirm',
        name: 'Add Department',
        message: 'Would you like to add a department?',
        defaut: true
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the name of the new Department:'
      }
    ])
  }
  const addrole = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role?',
        validate: overallInput => {
          if (overallInput) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      },
      {
        type:'confirm',
        name: 'Add Department',
        message: 'Would you like to add a new role?',
        defaut: true
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the name of the new Role:',
        validate: addrole => {
          if (addrole) {
            return true;
          } else {
            console.log('Please enter your new role');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the name of the salary of the new role:',
        validate: salary => {
          if (salary) {
            return true;
          } else {
            console.log('Please enter your new salary');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the name of the Department the role will be added to',
        validate: Departmentname => {
          if (Departmentname) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      }
    ])
  }
  const addEmployee = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role?',
        validate: addEmployee => {
          if (addEmployee) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      },
      {
        type:'confirm',
        name: 'Add Department',
        message: 'Would you like to add an Employee?',
        defaut: true
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the first name of the new employee:',
        validate: firstName => {
          if (firstName) {
            return true;
          } else {
            console.log('Please enter the first name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the last name of the new Employee:',
        validate: lastName => {
          if (lastName) {
            return true;
          } else {
            console.log('Please enter the last name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the name of the role of the new employee',
        validate: newRole => {
          if (newRole) {
            return true;
          } else {
            console.log('Please enter the role');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the name of the manager for the new employee',
        validate: manager => {
          if (manager) {
            return true;
          } else {
            console.log('Please enter the name');
            return false;
          }
        }
      }
    ])
  }
  const updateEmployee = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role?',
        validate: updateEmployee => {
          if (updateEmployee) {
            return true;
          } else {
            console.log('Please enter your choice');
            return false;
          }
        }
      },
      {
        type:'confirm',
        name: 'update Employee',
        message: 'Would you like to update an Employee?',
        defaut: true
      },
      {
        type: 'input',
        name: 'name',
        message:'Enter the name of the Employee you would like to update',
        validate: enterName => {
          if (enterName) {
            return true;
          } else {
            console.log('Please enter a name');
            return false;
          }
        }
      },{
        type: 'input',
        name: 'name',
        message:'Enter the name of the role you would like this employee to be updated to',
        validate: enterRole => {
          if (enterRole) {
            return true;
          } else {
            console.log('Please enter a new role');
            return false;
          }
        }
      }
    ])
  }
  viewDepartments()
  .then(viewDepartments => {console.log(viewDepartments)})
  .then(viewRoles)
  .then(viewRoles => {console.log(viewRoles)})
  .then(viewEmployees)
  .then(viewEmployees => {console.log(viewEmployees)})
  .then(addDepartment)
  .then(addDepartment => {console.log(addDepartment)})
  .then(addrole)
  .then(addrole => {console.log(addrole)})
  .then(addEmployee)
  .then(addEmployee => {console.log(addEmployee)})
  .then(updateEmployee)
  .then(updateEmployee => {console.log(updateEmployee)})
