import React, { useState } from "react";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { contact, desc, name, email };
    fetch("http://localhost:3000/api/postcontact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name === "contact") {
      setcontact(e.target.value);
    } else if (e.target.name === "email") {
      setemail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <div>
      <h1>Contact us</h1>
      <form className="bg-red-300" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="name">
            name
          </label>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="desc">
            desc
          </label>
          <textarea
            name="desc"
            value={desc}
            onChange={handleChange}
            className="form-control"
            id="desc"
            placeholder="write your concern here"
          ></textarea>
        </div>{" "}
        <div className="mb-3">
          <label htmlFor="contact" className="contact">
            contact
          </label>
          <input
            name="contact"
            value={contact}
            onChange={handleChange}
            type="phone"
            className="form-control"
            id="contact"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="email">
            Email address
          </label>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
