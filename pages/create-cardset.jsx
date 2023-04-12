import { useState, useRef, createRef, useEffect } from "react";
import Button from "@/components/button";
import TextInput from "@/components/text_input";
import CardInput from "@/components/card_input";
import CardsetRepository from "@/data/repositories/cardset_repository";

export default function CreateCardset() {
  const [cardInputs, setCardInputs] = useState([
    { index: 1, ref: createRef() },
  ]);
  const cardsetNameInputRef = useRef(null);
  const [isAddCardButtonDisabled, setIsAddCardButtonDisabled] = useState(false);

  function submitCardset() {
    const cardsData = [];
    let cardsetName = cardsetNameInputRef.current.querySelector("input").value;
    cardInputs.forEach((input) => {
      if (!input.ref.current) return; // check if ref exists
      const definitionInput =
        input.ref.current.querySelector(".definitionInput");
      const termInput = input.ref.current.querySelector(".termInput");
      cardsData.push({
        definition: definitionInput.value,
        term: termInput.value,
      });
    });
    console.log(cardsData);
    CardsetRepository.create(cardsetName, cardsData);
  }

  function handleAddCardInput() {
    const lastCard = cardInputs[cardInputs.length - 1];
    if (!lastCard.ref.current) return;

    if (isAddCardButtonDisabled) return;

    const newIndex = cardInputs.length + 1;
    setCardInputs((prevInputs) => [
      ...prevInputs,
      { index: newIndex, ref: createRef() },
    ]);
  }

  function handleCardInput(index, inputs) {
    setCardInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.index === index ? { ...input, inputs } : input
      )
    );
  }

  function handleCardDelete(index) {
    const remainingCards = cardInputs.filter((input) => input.index !== index);
    // re-index all cards
    const updatedCards = remainingCards.map((card, i) => ({
      ...card,
      index: i + 1,
    }));
    setCardInputs(updatedCards);
  }

  return (
    <div className="px-4 pt-6 md:px-12 lg:px-64">
      <div className="flex justify-between items-center lg:my-16">
        <h1 className="text-xl text-athens-gray font-bold">
          Create newstudy set
        </h1>
        <Button text="Create set" onClick={submitCardset} />
      </div>
      <div className="mt-4 lg:mt-12" ref={cardsetNameInputRef}>
        <TextInput placeholder="Enter title..." className="lg:w-2/5" />
      </div>
      <div className="mt-6">
        {cardInputs.map((input) => (
          <div key={input.index} ref={input.ref}>
            <CardInput
              index={input.index}
              onInput={handleCardInput}
              onDelete={handleCardDelete}
            />
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center">
        <Button
          text="Add card"
          onClick={handleAddCardInput}
          disabled={isAddCardButtonDisabled}
        />
      </div>
    </div>
  );
}
