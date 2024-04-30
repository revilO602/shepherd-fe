import React from "react";

const SnackbarContext = React.createContext<{
    open: boolean | null;
    setOpen: () => void;
    message: string | null;
    setMessage: () => void;
    type: string | null;
    setType: () => void;
  } | null>(null);

  export default SnackbarContext