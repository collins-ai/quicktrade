import { Link } from "react-router"

const CheckoutPage = () => {
  const cartTotal = [
    { id: 1, title: `Sub total`, price: 40 },
    { id: 2, title: `Sheeping fee`, price: 5 },
    { id: 3, title: `Total`, price: 45 }
  ]

  return (
    <main className="flex flex-col gap-20 px-4 py-15">
      <section className="flex flex-col gap-10">
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
      </section>
    </main>
  )
}

export default CheckoutPage