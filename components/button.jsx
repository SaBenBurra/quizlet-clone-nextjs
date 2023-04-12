export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        `bg-royal-blue ${
          props.disabled === false && "hover:bg-blue-600"
        } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline` +
        (props.disabled && " bg-gray-500 cursor-auto")
      }
    >
      {props.text}
    </button>
  );
}
