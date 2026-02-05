import { ScrollAnimation } from "./ScrollAnimation"

const FoodItem = ({ image, label, direction }) => {
  const { ref, visible } = ScrollAnimation()

  return (
    <div
      ref={ref}
      className={`food-item ml-50 mr-30 ${direction} ${visible ? "show" : ""}`}
    >
      <div className="w-50 h-50 rounded-full flex items-center justify-center">
        <img
          src={image}
          alt={label}
          className="w-70 h-70 object-contain"
        />
      </div>

      <h2 className="mt-3 text-white text-3xl font-bold text-center">
        {label}
      </h2>

      <div className="w-16 h-1 bg-gray-400 mx-auto mt-1" />
    </div>
  )
}

export default FoodItem
