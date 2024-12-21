import React from "react";

function UserForm(props) {
  const {
    handleSubmit,
    index,
    handleBackButton,
    forms,
    formData,
    handleInputChange,
  } = props;

  return (
    <div>
      {" "}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          {index > 0 && (
            <div
              onClick={handleBackButton}
              className="cursor-pointer text-black font-semibold text-xl mb-4 inline-flex items-center space-x-2"
            >
              <span>{"<"}</span>
              <span>Back</span>
            </div>
          )}
          <label className="block text-4xl font-bold text-black mb-2">
            {forms[index].label}
          </label>
          <input
            required
            value={formData[forms[index].id]}
            type={forms[index].inputType}
            id={forms[index].id}
            placeholder={forms[index].placeholder}
            onChange={handleInputChange}
            className="w-96 border border-black rounded-lg px-4 py-4 outline-none"
          />
        </div>
        <button className="text-2xl bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
          {forms[index].buttonName}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
