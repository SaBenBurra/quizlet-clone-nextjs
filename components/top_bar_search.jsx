export default function TopBarSearchButton() {
  return (
    <button
      className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
      aria-label="Notifications"
    >
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20h4a2          2 0 002-2v-5.879a1 1 0 01.293-.707l3.243-3.243a1 1 0 000-1.414l-4.586-4.586a1 1 0 00-1.414 0L8.464 13.536a1 1 0 01.293.707V18a2 2 0 002 2zm0-18a2 2 0 00-2 2v4a2 2 0 012 2h4a2 2 0 002-2V6a2 2 0 00-2-2h-4z"
        />
      </svg>
    </button>
  );
}
