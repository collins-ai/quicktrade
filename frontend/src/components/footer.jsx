import { FaCartPlus, FaHome, FaUser } from "react-icons/fa"
import { NavLink } from "react-router"

const Footer = () => {
  const style = `flex flex-col gap-1 items-center`

  return (
    <footer className="bg-white sticky bottom-0 w-full flex justify-between px-4 py-2 z-10">
      <NavLink to={`/`} className={({ isActive }) => isActive ? `${style} text-orange-600` : style}>
        <FaHome className="text-2xl" />
        <p className="text-sm">Home</p>
      </NavLink>
      <NavLink to={`/cart`} className={({ isActive }) => isActive ? `${style} text-orange-600` : style}>
        <FaCartPlus className="text-2xl" />
        <p className="text-sm">Cart</p>
      </NavLink>
      <NavLink to={`/profile`} className={({ isActive }) => isActive ? `${style} text-orange-600` : style}>
        <FaUser className="text-2xl" />
        <p className="text-sm">Profile</p>
      </NavLink>
    </footer>
  )
}

export default Footer