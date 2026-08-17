import { Link } from "react-router"
import Card from "../components/card"
import { food_list } from "../assets/assets"

import cartIcon from "/cart_icon.png"
import { FaBusinessTime, FaClock, FaCog, FaEnvelope, FaFirstOrder, FaHistory, FaIdCard, FaImdb, FaInbox, FaJediOrder, FaMailchimp, FaRegClock, FaShoppingBag, FaUser, FaUserClock } from "react-icons/fa"

const ProfilePage = () => {
  const cartTotal = [
    { id: 1, title: `Sub total`, price: 40 },
    { id: 2, title: `Sheeping fee`, price: 5 },
    { id: 3, title: `Total`, price: 45 }
  ]

  return (
    <main className="p-4 min-h-screen">
      <section className="flex justify-between items-center pb-4">
        <div className="flex items-center gap-2">
          <FaUser className="bg-orange-600 text-white text-3xl p-1 rounded-full" />
          <p className="font-bold">{`User`}</p>
        </div>
        <FaCog className="text-xl" />
      </section>
      <section className="flex flex-col h-[60vh] py-5 border-y-2 border-y-neutral-300">
        <div className="flex flex-col items-start justify-center gap-5 h-1/2">
          <p className="text-2xl font-bold leading-tight">Welcome to <br />QuickTrade</p>
          <Link to={`/signup`} className="bg-orange-600 text-white rounded-full px-5 py-1">Login / Register</Link>
        </div>
        <div className="bg-neutral-300 flex flex-col justify-between h-1/2">
          <div className="flex items-center gap-3 p-4 bg-white">
            <FaShoppingBag className="text-2xl" />
            <p>Messages</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white">
            <FaEnvelope className="text-2xl" />
            <p>Your orders</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white">
            <FaUserClock className="text-2xl" />
            <p>Reviews</p>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white">
            <FaClock className="text-2xl" />
            <p>History</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 py-5">
        <p className="font-bold">More product</p>
        <div className="flex flex-wrap justify-center gap-5">
          {food_list.map(item => (
            <Card key={item._id} item={item} large={true} />
          ))}
        </div>
      </section>
      {/* <section className="flex flex-col gap-10">
        <p className="text-xl font-bold">Delivery Information</p>
        <form className="flex flex-col gap-5">
          <div className="flex gap-5">
            <input type="text" name="" id="" placeholder="First name" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
            <input type="text" name="" id="" placeholder="Last name" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
          </div>
          <input type="email" name="" id="" placeholder="Email address" className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
          <input type="text" name="" id="" placeholder="Street" className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
          <div className="flex gap-5">
            <input type="text" name="" id="" placeholder="City" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
            <input type="text" name="" id="" placeholder="State" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
          </div>
          <div className="flex gap-5">
            <input type="text" name="" id="" placeholder="Zip code" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
            <input type="text" name="" id="" placeholder="Country" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
          </div>
          <input type="tel" name="" id="" placeholder="Phone number" className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
        </form>
      </section>
      <section className="flex flex-col gap-5">
        <p className="text-xl font-bold">Cart Total</p>
        <div>
          {cartTotal.map(item => (
            <div key={item.id} className="flex justify-between py-2 border-b-2 border-b-neutral-300">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
        <Link to={`/payment`} className="bg-orange-500 text-white rounded-xl px-5 py-2 self-start cursor-pointer hover:bg-orange-600">Proceed to payment</Link>
      </section> */}
    </main>
  )
}

export default ProfilePage