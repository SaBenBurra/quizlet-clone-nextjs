import TextInput from "./text_input";

export default function CardInput() {
  return (
    <div className="relative w-full bg-pickled-bluewood rounded-lg h-52 py-4 px-3 mb-4 lg:h-44">
      <div className="flex justify-between items-center lg:h-1/5">
        <h2 className="absolute bottom-3 left-3 text-athens-gray lg:relative lg:bottom-0 lg:left-0">
          1
        </h2>
        <span className="absolute bottom-3 right-3 lg:relative lg:bottom-0 lg:left-0 cursor-pointer">
          <svg
            className="w-5 h-5 text-violet-red"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 11-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
            />
          </svg>
        </span>
      </div>
      <div className="lg:flex lg:h-full items-center justify-between">
        <TextInput
          placeholder="Enter definition..."
          className="mb-8 lg:mb-0 lg:h-12"
        />
        <div className="hidden lg:block w-20"></div>
        <TextInput placeholder="Enter term..." className="lg:h-12" />
      </div>
    </div>
  );
}
