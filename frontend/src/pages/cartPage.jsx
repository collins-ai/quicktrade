import { Link } from "react-router"
import { FaTrash } from "react-icons/fa"
import { assets, food_list } from "../assets/assets"
//import food from "../assets/food_14.png"

import cartIcon from "/cart_icon.png"
import Card from "../components/card"

const CartPage = () => {
  // const cartTotal = [
  //   { id: 1, title: `Sub total`, price: 40 },
  //   { id: 2, title: `Sheeping fee`, price: 5 },
  //   { id: 3, title: `Total`, price: 45 }
  // ]

  // const mmm = [1,2,3,4,5,6,7,8,9]

  return (
    <main className="p-4 min-h-screen">
      <section className="flex justify-between items-center pb-4">
        <p className="text-lg font-bold">Cart {`(${0})`}</p>
        <FaTrash className="text-xl" />
      </section>
      <section className="flex flex-col items-center justify-center gap-3 h-[60vh] border-y border-y-neutral-300">
        <img src={cartIcon} alt="cart icon" className="w-12" />
        <p className="font-bold">Your cart is empty</p>
        <Link to={`/signup`} className="bg-orange-600 text-white rounded-full px-5 py-1">Login / Register</Link>
      </section>
      <section className="flex flex-col gap-5 py-5">
        <p className="font-bold">More products</p>
        <div className="flex flex-wrap justify-center gap-5">
          {food_list.map(item => (
            <Card key={item._id} item={item} large={true} />
          ))}
        </div>
      </section>
      {/* <section className="">
        <ul className="flex justify-between items-center py-2 font-bold border-b border-b-neutral-300">
          <li>Image</li>
          <li>Title</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
          <li>Remove</li>
        </ul>
        <div className="h-[50vh] overflow-auto">
          {mmm.map(mm => (
            <div key={mm} className="flex flex-wrap justify-center items-center gap-2 py-2 text-center border-b border-b-neutral-300">
              <div className="basis-40">
                <img src={food} alt="" className="w-12 mx-auto" />
              </div>
              <p className="basis-40 leading-tight">Greek salad</p>
              <span className="basis-20">${12}</span>
              <span className="basis-20">{2}</span>
              <span className="basis-20">${24}</span>
              <div className="basis-20 cursor-pointer">
                <img src={assets.cross_icon} alt="cross icon" className="w-4 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <p className="text-xl font-bold">Cart Total</p>
        <div>
          {cartTotal.map(item => (
            <div key={item.id} className="flex justify-between py-2 border-b border-b-neutral-300">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
        <Link to={`/checkout`} className="bg-orange-500 text-white rounded-xl px-5 py-2 self-start cursor-pointer hover:bg-orange-600">Proceed to checkout</Link>
      </section> */}
    </main>
  )
}

export default CartPage