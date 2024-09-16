import React from "react";
import "./UserList.css";

// UserList component for displaying the list of users
const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div>
      <div className="Heading">
        <h1>User List</h1>
      </div>

      <table className="userList-table">
        <thead>
          <tr className="userList-table">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            // Generate table rows for each user
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <div>
                  {/* Edit button to edit user details */}
                  <button className="button" onClick={() => editUser(user)}>
                    Edit
                  </button>
                  {/* Delete button to delete the user */}
                  <button
                    className="button"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
