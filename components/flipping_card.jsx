import { useState } from "react";

export default function FlippingCard(props) {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
  }
  return (
    <div
      className="px-5 rounded-md flex justify-center items-center overflow-hidden flip-card w-full h-full perspective-xl cursor-pointer"
      onClick={handleClick}
    >
      <div className={` flip-card-inner transform ${flipped && "flipped"}`}>
        <div className="flip-card-front bg-pickled-bluewood text-white p-4 flex justify-center items-center font-bold text-xl">
          <h2 className="lg:text-4xl">{props.front}</h2>
        </div>
        <div className="flip-card-back bg-pickled-bluewood text-white p-4 flex justify-center items-center font-bold text-xl">
          <h2 className="lg:text-4xl">{props.back}</h2>
        </div>
      </div>
    </div>
  );
}
