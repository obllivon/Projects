import React, { useState } from "react";

export default function SignUp() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lasttName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div class="form">
      <form class="NameForm" onSubmit={handleSubmit}>
        {submitted ? (
          <div className="Alert">Registration completed successfully!</div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form"
          placeholder="First Name"
          name="firstName"
        />

        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form"
          placeholder="Last Name"
          name="lastName"
        />

        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form"
          placeholder="Email address"
          name="email"
        />

        <button class="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}