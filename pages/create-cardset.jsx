import Button from "@/components/button";
import CardInput from "@/components/card_input";
import TextInput from "@/components/text_input";

export default function CreateCardset() {
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
        <CardInput />
        <CardInput />
        <CardInput />
      </div>
      <div className="my-4 flex justify-center">
        <Button text="Add new card" />
      </div>
    </div>
  );
}
