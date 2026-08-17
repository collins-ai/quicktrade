import { useContext } from "react"
import { appContext } from "../App"
import { assets } from "../assets/assets"
import { Link } from "react-router"
import cartIcon from "/cart_icon.png"

const SignupPage = () => {
  const { setOpen, signup, setSignup } = useContext(appContext)

  const closeForm = () => {
    setOpen(false)
    document.body.classList.remove(`overflow-hidden`)
  }

  const submitForm = (e) => {
    e.preventDefault()
    alert(`submitted!`)
  }

  return (
    <main className="bg-gradient-to-b from-orange-400 to-orange-200 w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <div className="flex gap-2 items-center">
        <img src={cartIcon} alt="app logo" className="w-8" />
        <span className="text-2xl font-bold">QuickTrade</span>
      </div>
      <form noValidate onSubmit={submitForm} className="bg-white flex flex-col gap-5 p-5 rounded-2xl w-75 sm:w-100">
        <div className="flex justify-between items-center mb-2">
          <p className="text-neutral-800 text-2xl font-bold">{signup ? `Sign Up` : `Login`}</p>
          <Link to={`/`}>
            <img onClick={closeForm} src={assets.cross_icon} alt="cross icon" className="cursor-pointer" />
          </Link>
        </div>
        {signup && <input type="text" name="" id="" placeholder="name" className="border border-neutral-300 outline-0 rounded-xl p-2" />}
        <input type="email" name="" id="" placeholder="email" className="border border-neutral-300 outline-0 rounded-xl p-2" />
        <input type="password" name="" id="" placeholder="password" className="border border-neutral-300 outline-0 rounded-xl p-2" />
        <button type="submit" className="bg-orange-500 text-white rounded-xl py-2 cursor-pointer hover:bg-orange-600">{signup ? `Create account` : `Login`}</button>
        {signup && <p>Already have an account? <span onClick={() => { setSignup(false) }} className="text-orange-400 cursor-pointer hover:text-orange-600">Login here</span></p>}
        {!signup && <p>Create a new account? <span onClick={() => { setSignup(true) }} className="text-orange-400 cursor-pointer hover:text-orange-600">Click here</span></p>}
      </form>
    </main>
  )
}

export default SignupPage