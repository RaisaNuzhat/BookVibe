
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 fixed shadow-lg px-4 container mx-auto z-10">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-[18px] gap-0 lg:text-3xl normal-case text-[#131313]">Book Vibe</Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 lg:text-xl text-[12px] sm:flex gap-5 items-center">
            <NavLink to='/' className={({isActive})=>isActive  ? 'text-[#23BE0A] lg:font-bold  ':' text-[#131313] lg:font-bold '}>Home</NavLink>
            <NavLink to='/listedbooks' className={({isActive})=>isActive  ? 'text-[#23BE0A] lg:font-bold  ':' text-[#131313] lg:font-bold '}>Listed Books</NavLink>
            <NavLink to='/pagestoread' className={({isActive})=>isActive  ? 'text-[#23BE0A] lg:font-bold ':' text-[#131313] lg:font-bold '}>Pages to Read</NavLink>
            <Link  to='/signin'  className="btn bg-[#23BE0A] text-white">Sign In</Link>
            <Link  to='/signup' className="btn  bg-[#59C6D2] text-white">Sign Up</Link>

          </ul>
       
        </div>
      </div>
    );
};

export default NavBar;