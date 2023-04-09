export default function TopBarMenuLinks() {
  return (
    <>
      <div className={"hidden lg:block sm:ml-6"}>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-athens-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-200"
          >
            Option 1
          </a>
          <a
            href="#"
            className="text-athens-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-200"
          >
            Option 2
          </a>
          <a
            href="#"
            className="text-athens-gray hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-200"
          >
            Option 3
          </a>
        </div>
      </div>
    </>
  );
}
