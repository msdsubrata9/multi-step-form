import React from "react";

function FormDetails(props) {
  const { formData } = props;
  return (
    <div>
      <div>
        <h1 className="font-bold text-5xl m-4">Success!!!</h1>
        <div className="font-bold text-3xl">Name: {formData.name}</div>
        <div className="font-bold text-3xl">Email: {formData.email}</div>
        <div className="font-bold text-3xl">DOB: {formData.dob}</div>
        <div className="font-bold text-3xl">Password: {formData.password}</div>
      </div>
    </div>
  );
}

export default FormDetails;
