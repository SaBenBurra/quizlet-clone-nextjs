export default function TextInput(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className={`border-b border-gray-400 focus:border-blue-600 py-2 px-4 block w-full appearance-none leading-normal bg-transparent outline-none text-athens-gray ${
        props.className || ""
      }`}
    />
  );
}
