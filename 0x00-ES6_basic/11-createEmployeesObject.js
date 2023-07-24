export default function createEmployeesObject(departmentName, employees) {
  const employeeList =  {
    [departmentName]: employees,
  };
	return employeeList;
}
