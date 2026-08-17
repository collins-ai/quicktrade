import { Link } from "react-scroll"
import { useState } from "react"
import { assets, food_list, menu_list } from "../assets/assets"
import Header from "../components/header"
import Card from "../components/card"
import Marquee from "react-fast-marquee"

const HomePage = () => {
  const [menuId, setMenuId] = useState(null)
  const [category, setCategory] = useState(`All`)

  const selectMenu = (item) => {
    setMenuId(menuId === item._id ? null : item._id)
    setCategory(category === item.menu_name ? `All` : item.menu_name)
  }

  const filteredMenu = category === `All` ? food_list : food_list.filter(item => item.category === category)
  const info = [
    `Nationwide delivery`,
    `10% off your first order`,
    `Secure payment`,
    `Free shipping on orders over $50`,
    `New products added every week`
  ]

  return (
    <div>
      <Header />
      <main className="flex flex-col gap-10 p-4 z-0 min-h-screen">
        <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[30vh] rounded-2xl relative">
          <div className="bg-neutral-800/30 absolute inset-0 rounded-2xl"></div>
          <div className="absolute bottom-6 left-4 fade">
            <h1 className="text-white text-2xl font-bold leading-tight mb-5">Order your favourite <br /> products here</h1>
            <p className="hidden text-white mb-5 w-1/2 leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est inventore aut possimus quibusdam laborum et fugit tempora iure, quasi, quam dolores aliquid suscipit enim provident!</p>
            <Link to="category" className="bg-white text-neutral-800 rounded-full px-5 py-1.5 hover:bg-orange-600 hover:text-white">View category</Link>
          </div>
        </section>
        <Marquee pauseOnHover={true}>
          {info.map(item => (
            <p key={item} className="px-2 font-bold">{item}</p>
          ))}
        </Marquee>
        <section className="flex flex-col">
          <p className="text-lg font-bold">Best selling products</p>
          <div className="flex gap-5 py-3 overflow-auto">
            {food_list.map(item => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        </section>
        <section className="flex flex-col">
          <p className="text-lg font-bold">New arrivals</p>
          <div className="flex gap-5 py-3 overflow-auto">
            {food_list.map(item => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        </section>
        <section id="category" className="flex flex-col gap-3">
          <p className="text-lg font-bold">Shop by category</p>
          <div className="flex gap-5 overflow-x-auto">
            {menu_list.map(item => (
              <div onClick={() => { selectMenu(item) }} key={item._id} className="flex flex-col items-center gap-1 w-20 shrink-0 cursor-pointer">
                <img src={item.menu_image} alt={item.menu_name} className={`${menuId === item._id && 'border-2 border-orange-600'} w-full object-cover rounded-full hover:border-2 hover:border-orange-600`} />
                <span className="text-neutral-500">{item.menu_name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-5 py-5">
            {filteredMenu.map(item => (
              <Card key={item._id} item={item} large={true} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage