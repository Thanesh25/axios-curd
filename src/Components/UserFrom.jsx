import React, { useState, useEffect } from "react";
import "./UserFrom.css";

// UserForm component for adding and updating users
const UserForm = ({ addUser, updateUser, currentUser, setCurrentUser }) => {
  // State to manage the form fields: name, email, and phone
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // useEffect hook to populate the form fields when a user is being edited
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
    }
  }, [currentUser]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      // Update existing user
      updateUser(currentUser.id, { name, email, phone });
    } else {
      // Add new user
      addUser({ name, email, phone });
    }
    // Clear the form fields
    setName("");
    setEmail("");
    setPhone("");
  };

  // Render the form
  return (
    <div className="user-form">
      <h2>{currentUser ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label className="label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label className="label">Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        <button type="submit">{currentUser ? "Update" : "Add"}</button>
        {currentUser && (
          <button type="button" onClick={() => setCurrentUser(null)}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
