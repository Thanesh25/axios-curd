import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./Components/UserFrom.jsx";
import UserList from "./Components/UserList.jsx";
import "./App.css";

// Main App component
const App = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  // State to store the user currently being edited
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect hook to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Function to add a new user to the API
  const addUser = async (user) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user
      );
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Function to update an existing user in the API
  const updateUser = async (id, updatedUser) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updatedUser
      );
      setUsers(users.map((user) => (user.id === id ? response.data : user)));
      setCurrentUser(null); // Reset currentUser after update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Function to delete a user from the API
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to set the current user for editing
  const editUser = (user) => {
    setCurrentUser(user);
  };

  // Render the component
  return (
    <div className="App">
      <div className="heading">
        <h1>USER CRUD APP</h1>
      </div>

      {/* UserForm component for adding/updating users */}
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      {/* UserList component for displaying and managing the list of users */}
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
