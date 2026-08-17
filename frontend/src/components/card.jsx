import cartIcon from "/cart_icon.png"

const Card = ({ item, large }) => {
  return (
    <div className={`${large ? 'w-[45%]' : 'w-35 rounded-xl'} bg-white shadow-md shadow-neutral-300 shrink-0`}>
      <img src={item.image} alt={item.name} className={`${large ? 'h-40' : 'h-35 rounded-t-xl'} "w-full object-cover`} />
      <div className="flex flex-col gap-3 p-2">
        <p className="leading-tight">{item.name}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold">${item.price}</p>
          <img src={cartIcon} alt="cart icon" className="w-5" />
        </div>
      </div>
    </div>
  )
}

export default Card