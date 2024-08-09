import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewAdmin = () => {
  const { isAuthenticated} = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sns, setSns] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://casa-da-saude.onrender.com/api/v1/user/admin/register",
        {
          firstName,
          lastName,
          email,
          phone,
          sns,
          dob,
          password,
          gender,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
 
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (!isAuthenticated) {
    return <navigateTo to={"/login"} />;
  }

  return (
    <>
      <section className="page">
        <section className="container form-component add-admin-form">
          <img src="/logo" alt="logo" className="logo" />
          <h1 className="form-title">Add new Admin</h1>

          <form onSubmit={handleAddNewAdmin}>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Sns"
                value={sns}
                onChange={(e) => setSns(e.target.value)}
              />
          
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            </div>
<div>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <button type="submit">Add New Admin</button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default AddNewAdmin;
