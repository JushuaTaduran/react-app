import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuiidv4 } from "uuid";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Shinobu Kocho",
      title: "Demon Slayer",
      img: "https://i.pinimg.com/564x/60/5d/43/605d437e7d88af5c83c4cfa1c210c290.jpg",
    },
    {
      id: 2,
      name: "Takina Inoue",
      title: "Lycoris Recoil",
      img: "https://i.pinimg.com/564x/b7/ce/f0/b7cef06d1bb62e18aa0bcea80725b069.jpg",
    },
    {
      id: 3,
      name: "Nishikigi Chisato",
      title: "Lycoris Recoil",
      img: "https://i.pinimg.com/564x/fb/f4/c7/fbf4c769ad370d2d473c093b906dafc2.jpg",
    },
    {
      id: 4,
      name: "Komi Shouko",
      title: "Komi-san can't communicate",
      img: "https://i.pinimg.com/564x/e1/91/46/e1914638eb301fb4fc923a54f40e85ba.jpg",
    },
    {
      id: 5,
      name: "Yor Forger",
      title: "Spy x Family",
      img: "https://i.pinimg.com/564x/0c/51/3e/0c513e30532c015ebe5a48bd07f7554e.jpg",
    },
    {
      id: 6,
      name: "Sengoku Nadeko",
      title: "Monogatari",
      img: "https://i.pinimg.com/564x/b2/dc/50/b2dc50b0f7fe708cb9ab4c12c7abcaf6.jpg",
    },
  ]);

  function updateEmployee(id, newName, newTitle) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, title: newTitle };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      <>
        {showEmployees ? (
          <>
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    title={employee.title}
                    img={employee.img}
                    updateEmployee={updateEmployee}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p>You cannot see the employees</p>
        )}
      </>
    </div>
  );
}

export default App;
