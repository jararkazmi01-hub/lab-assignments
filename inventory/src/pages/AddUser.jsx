import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://dummyjson.com/users/add", form);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Add User</h2>

        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;