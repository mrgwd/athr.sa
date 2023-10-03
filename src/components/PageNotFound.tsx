import { Link } from "react-router-dom";
import logo from "../assets/images/logo/ATHR.png";
export default function PageNotFound() {
  document.body.classList.add("overflow-hidden");
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img src={logo} alt="ATHR Logo" />
      <p className="text-xl">Looks like you're lost</p>
      <Link to="/" className="mt-4 text-main-color">
        Go Home
      </Link>
    </div>
  );
}
