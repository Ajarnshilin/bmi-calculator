import React, { createContext, useState } from "react";

export const ActionContext = createContext({});

export const ActionContextProvider = ({ children }) => {
  const [status, setSatatus] = useState(1);
  const [result, setResult] = useState(0);
  const [BMI, setBMI] = useState(0);
  const valueAction = {
    statusValue: [status, setSatatus],
    resultValue: [result, setResult],
    yourBMI: [BMI, setBMI]
  };
  return (
    <ActionContext.Provider value={valueAction}>
      {children}
    </ActionContext.Provider>
  );
};

export default ActionContext;
