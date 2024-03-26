
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 fixed shadow-lg px-4 container mx-auto z-10">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost  gap-0 text-3xl normal-case text-secondary">Book Vibe</Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 text-xl hidden sm:flex gap-5 items-center">
            <NavLink to='' className={({isActive})=>isActive  ? 'text-primary font-bold ':'font-bold'}>Home</NavLink>
            <NavLink to='' className={({isActive})=>isActive  ? 'text-primary font-bold ':'font-bold'}>Listed Books</NavLink>
            <NavLink to='' className={({isActive})=>isActive  ? 'text-primary font-bold':'font-bold'}>Pages to Read</NavLink>
            <button className="btn btn-success">Sign In</button>
            <button className="btn  btn-accent">Sign Up</button>

          </ul>
       
        </div>
      </div>
    );
};

export default NavBar;