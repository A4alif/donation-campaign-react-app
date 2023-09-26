import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav  className="container mx-auto px-4  ">
        <div className="navbar pt-9 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-lg btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                 <NavLink
                
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600 underline" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600 underline" : ""
                }
              >
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600 underline" : ""
                }
              >
                Statistics
              </NavLink>
              </ul>
            </div>
            <Link to={'/'} className=" normal-case text-xl hidden lg:flex">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="navbar-end">
            <a className=" normal-case text-xl lg:hidden">
              <img src={logo} alt="" />
            </a>
            <ul className="menu menu-horizontal px-1 hidden lg:flex text-2xl font-semibold space-x-8">
              <NavLink
                
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600 underline" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600 underline" : ""
                }
              >
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600 underline" : ""
                }
              >
                Statistics
              </NavLink>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
