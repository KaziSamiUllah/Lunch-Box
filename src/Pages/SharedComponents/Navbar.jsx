import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  console.log(user);
  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allItems">All Items</NavLink>
      </li>
      <li>
        <NavLink to="/vendors">Vendors</NavLink>
      </li>

      <li>
        <NavLink to="/myOrders">My orders</NavLink>
      </li>
      <li>
        <NavLink to="/addItem">Add Item</NavLink>
      </li>
    </>
  );

  const handleLogout=()=>{
    console.log("signout");
    SignOut()
    .then(res=>console.log(res))
  }

  return (
    <div>
      <div className="navbar bg-black bg-opacity-60  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl gap-0">
            Lunch<span className="text-red-500 font-extrabold">Box</span>
            {""}
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-bold">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {
                user?
                <button onClick={handleLogout} className="btn">Logout</button>:
                <Link to="/login" className="btn">
                Login
              </Link>
                
            }
           
          </div>
          {/* <a className="">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
