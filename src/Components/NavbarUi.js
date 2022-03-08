import { Link } from "react-router-dom";

export const NavbarUi = () => {
  return (
    <div>
      <li>
        <Link to="/">Activities</Link>
      </li>
      <li>
        <Link to="/montlyStats">Montly stats</Link>
      </li>
    </div>
  );
};
