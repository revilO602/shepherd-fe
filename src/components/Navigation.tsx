import { NavLink } from "react-router-dom";
import { useUser } from "../api/auth/useUser";
import { useLogout } from "../api/auth/useLogout";

const Navigation = () => {
  const { data } = useUser();
  const onLogout = useLogout();
  return (
    <nav>
      <NavLink to="/trips">Trips</NavLink>

      {data?.access_token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Navigation;
