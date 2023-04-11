export default function Button(props) {
  return (
    <button className="bg-royal-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      {props.text}
    </button>
  );
}
