import React from "react";
import SnackbarContext from "../contexts/SnackbarContext";

const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = React.useState<boolean | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);
  const [type, setType] = React.useState<string | null>(null);

  const value = {
    open,
    setOpen,
    message,
    setMessage,
    type,
    setType,
  };

  return (
    <SnackbarContext.Provider value={value}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
