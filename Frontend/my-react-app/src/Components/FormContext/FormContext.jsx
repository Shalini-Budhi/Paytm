import React, { createContext, useState } from "react";

// create context
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    operator: "",
    amount: "",
    billType: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};