import CardsetListItem from "@/components/cardset_list_item";
import CardsetRepository from "@/data/repositories/cardset_repository";
import { useEffect, useState } from "react";

export default function Home() {
  const [cardsets, setCardsets] = useState([]);

  useEffect(() => {
    async function fetchCardsets() {
      let cardsets = await CardsetRepository.getAll();
      return cardsets;
    }
    fetchCardsets().then((cardsetList) => setCardsets(cardsetList));
  }, []);

  return (
    <div className="h-screen p-6 lg:flex lg:flex-wrap lg:justify-center">
      {cardsets.map((cardset) => (
        <CardsetListItem
          key={cardset.id}
          title={cardset.name}
          id={cardset.id}
          cardCount={cardset.cardCount}
        />
      ))}
    </div>
  );
}
