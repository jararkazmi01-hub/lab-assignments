import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  const deleteUser = (id) => {
    if (confirm("Delete karna hai?")) {
      fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      }).then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Users List</h1>

      <button
        onClick={() => navigate("/add-user")}
        style={{
          padding: "10px 15px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add New User
      </button>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th style={{ padding: "10px" }}>First Name</th>
            <th style={{ padding: "10px" }}>Last Name</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Phone</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {user.firstName}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {user.lastName}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {user.email}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {user.phone}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <button
                  onClick={() => navigate(`/edit-user/${user.id}`)}
                  style={{
                    padding: "5px 10px",
                    marginRight: "10px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteUser(user.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
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

export default Users;