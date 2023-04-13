import Button from "@/components/button";
import FlippingCard from "@/components/flipping_card";
import CardsetRepository from "@/data/repositories/cardset_repository";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [cardsetData, setCardsetData] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    if (id) {
      console.log(id);
      CardsetRepository.getById(id).then((value) => {
        setCardsetData(value);
        console.log(value.cards[0].definition);
      });
    }
  }, [id]);

  function incrementCardIndex() {
    console.log("AUUUUUUUUU");
    if (currentCardIndex < cardsetData.cards.length - 1) {
      console.log("lkasdfs");
      setCurrentCardIndex(currentCardIndex + 1);
    }
    console.log(currentCardIndex + 1);
  }
  function decrementCardIndex() {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  }
  return (
    <div className="py-6 h-screen text-center px-4">
      <h1 className="text-2xl text-athens-gray font-bold mb-10">
        {cardsetData !== null && cardsetData.name}
      </h1>
      <div className="w-full h-1/3 lg:h-2/3 lg:flex lg:items-center lg:flex-col">
        <div
          className="
          w-full lg:w-2/3 h-full"
        >
          {cardsetData && (
            <FlippingCard
              front={cardsetData.cards[currentCardIndex].definition}
              back={cardsetData.cards[currentCardIndex].term}
            />
            //<h1>{cardsetData.cards[0].definition}</h1>
          )}
        </div>
        <div className="mt-6 lg:mt-16 flex justify-evenly">
          <Button
            text="Prev"
            onClick={decrementCardIndex}
            disabled={false}
            className="lg:w-80 lg:h-20 lg:text-2xl"
          />
          <span className="w-20" />
          <Button
            text="Next"
            onClick={incrementCardIndex}
            disabled={false}
            className="lg:w-80 lg:h-20 lg:text-2xl"
          />
        </div>
      </div>
    </div>
  );
}
