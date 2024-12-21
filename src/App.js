import { useState } from "react";
import UserForm from "./components/UserForm";
import FormDetails from "./components/FormDetails";

function App() {
  const formDataList = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "Your Password...",
    },
  ];

  const [forms, setforms] = useState(formDataList);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Form Submitted");
      setIsFormSubmitted(true);
    } else {
      setIndex(index + 1);
    }
  }

  function handleBackButton() {
    setIndex(index - 1);
  }

  function handleInputChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    const copyFromData = { ...formData };
    copyFromData[id] = val;
    setFormData(copyFromData);
  }

  console.log(formData);

  return (
    <div className="h-screen bg-gray-500 flex items-center justify-center">
      {!isFormSubmitted ? (
        <UserForm
          handleSubmit={handleSubmit}
          index={index}
          handleBackButton={handleBackButton}
          forms={forms}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      ) : (
        <FormDetails formData={formData} />
      )}
    </div>
  );
}

export default App;
