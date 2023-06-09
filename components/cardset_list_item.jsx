import Link from "next/link";

export default function CardsetListItem(props) {
  return (
    <Link
      href={`/cardsets/${props.id}`}
      className="lg:w-1/5 lg: mr-10 lg:h-1/5"
    >
      <div className="group w-full bg-pickled-bluewood flex flex-col justify-between rounded-md h-1/5 md:h-1/6 lg:h-32 pt-4 my-5 overflow-hidden">
        <div className="flex flex-col px-4">
          <h2 className="text-athens-gray font-bold text-lg md:text-2xl ">
            {props.title}
          </h2>
          <h3 className="text-gull-gray font-bold">{props.cardCount} terms</h3>
        </div>
        <div className="bg-white h-2 opacity-0 group-hover:opacity-100 duration-300"></div>
      </div>
    </Link>
  );
}
