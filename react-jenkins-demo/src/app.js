import { useState } from "react";

export default function App() {
  const [users] = useState([
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Mike Johnson", role: "Manager" },
  ]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f4f6f9",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <header
        style={{
          background: "#2563eb",
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
        }}
      >
        <h1>Employee Dashboard</h1>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Total Employees</h3>
          <h2>{users.length}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Projects</h3>
          <h2>12</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Revenue</h3>
          <h2>$24,500</h2>
        </div>
      </div>

      <div
        style={{
          background: "white",
          marginTop: "25px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Employee List</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ background: "#e5e7eb" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {user.id}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {user.name}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
