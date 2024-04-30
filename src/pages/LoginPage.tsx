import { useNavigate } from "react-router-dom";
import { useUser } from "../api/auth/useUser";
import LoginForm from "../components/auth/LoginForm";
import { useEffect } from "react";
import { Link, Typography } from "@mui/material";

const Login = () => {
  const { data } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/trips");
    }
  }, [data]);

  return (
    <>
      <h2>Home (Public)</h2>
      <LoginForm></LoginForm>
      <Typography variant="body2" align="center">
        Don't have an account? <Link href="/register">Register here</Link>
      </Typography>
    </>
  );
};

export default Login;
