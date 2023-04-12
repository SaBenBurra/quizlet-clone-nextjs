import { useState, useRef, createRef } from "react";
import Button from "@/components/button";
import TextInput from "@/components/text_input";
import CardInput from "@/components/card_input";

export default function CreateCardset() {
  const [cardInputs, setCardInputs] = useState([
    <CardInput key={0} index={1} />,
  ]);
  const cardInputRefs = useRef([createRef()]);

  function submitCardset() {
    const inputs = [];

    cardInputRefs.current.forEach((ref) => {
      const definitionInput = ref.current.querySelector(".definitionInput");
      const termInput = ref.current.querySelector(".termInput");
      inputs.push({
        definition: definitionInput.value,
        term: termInput.value,
      });
    });
  }

  function handleAddCardInput() {
    setCardInputs((prevInputs) => [
      ...prevInputs,
      <CardInput key={prevInputs.length} index={prevInputs.length + 1} />,
    ]);
    cardInputRefs.current.push(createRef());
  }

  return (
    <div className="px-4 pt-6 md:px-12 lg:px-64">
      <div className="flex justify-between items-center lg:my-16">
        <h1 className="text-xl text-athens-gray font-bold">
          Create new study set
        </h1>
        <Button text="Create set" />
      </div>
      <div className="mt-4 lg:mt-12">
        <TextInput placeholder="Enter title..." className="lg:w-2/5" />
      </div>
      <div className="mt-6">
        {cardInputs.map((_, index) => (
          <div key={index} ref={cardInputRefs.current[index]}>
            <CardInput index={index + 1} />
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center">
        <button onClick={handleAddCardInput}>Yeni Ekle</button>
        <button onClick={submitCardset}>Tüm Inputları Al</button>
      </div>
    </div>
  );
}
