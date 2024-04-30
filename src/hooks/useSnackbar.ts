import React from "react";
import SnackbarContext from "../contexts/SnackbarContext";

const useSnackbar = () => {
  return React.useContext(SnackbarContext);
};

export default useSnackbar