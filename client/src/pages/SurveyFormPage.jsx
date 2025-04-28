import React from "react";
import Header from "../components/header";
import Form from "../components/Form";

const SurveyFormPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-purple-100 p-10">
      <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-lg transition-all hover:shadow-2xl duration-300">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default SurveyFormPage;
