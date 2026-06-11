import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [employees, setEmployees] = useState([]);

  const [id, setId] = useState(null);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const API_URL = "http://13.51.195.180:8080/employees";

  const loadEmployees = () => {

    axios.get(API_URL)
      .then(response => {
        setEmployees(response.data);
      });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const saveEmployee = () => {

    const employee = {
      name,
      department,
      salary
    };

    if (id === null) {

      axios.post(API_URL, employee)
        .then(() => {

          clearForm();
          loadEmployees();
        });

    } else {

      axios.put(`${API_URL}/${id}`, employee)
        .then(() => {

          clearForm();
          loadEmployees();
        });
    }
  };

  const editEmployee = (employee) => {

    setId(employee.id);
    setName(employee.name);
    setDepartment(employee.department);
    setSalary(employee.salary);
  };

  const deleteEmployee = async (id) => {

    try {

      await axios.delete(
        `${API_URL}/${id}`
      );
      loadEmployees();

    } catch(error) {

      console.error(error);

    }
  };

  const clearForm = () => {

    setId(null);
    setName("");
    setDepartment("");
    setSalary("");
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Employee Management System</h1>

      <h3>
        {id === null ? "Add Employee" : "Update Employee"}
      </h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br /><br />

      <button onClick={saveEmployee}>
        {id === null ? "Save Employee" : "Update Employee"}
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={clearForm}>
        Clear
      </button>

      <hr />

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.map(emp => (

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>

              <td>

                <button
                  onClick={() => editEmployee(emp)}>
                  Edit
                </button>

                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => deleteEmployee(emp.id)}>
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;