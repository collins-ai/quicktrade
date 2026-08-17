import { FaBell, FaSearch } from "react-icons/fa"
import { NavLink } from "react-router"
import cartIcon from "/cart_icon.png"

const Header = () => {
  return (
    <header className="bg-white flex flex-col gap-3 p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <NavLink to={`/`} className={`flex gap-2 items-center fade`}>
          <img src={cartIcon} alt="app logo" className="w-6" />
          <span className="text-lg font-bold">QuickTrade</span>
        </NavLink>
        <FaBell className="text-2xl" />
      </div>
      <div className="relative">
        <FaSearch className="text-xl absolute top-2 right-4" />
        <input type="search" name="search" id="search" placeholder="search here" className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
      </div>
    </header>
  )
}

export default Header