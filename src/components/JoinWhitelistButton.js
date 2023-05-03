export default function JoinWhitelistButton({
  className = "",
  isEnabled = true,
  onClick = () => {},
}) {
  return (
    <button
      className={`${className} w-min text-white py-6 px-14 rounded-full font-inter text-[1.8rem] font-semibold tracking-[0.16em] uppercase whitespace-nowrap  transition ${
        isEnabled
          ? "bg-ai-blue opacity-100 shadow-ai-button hover:brightness-125 active:brightness-90"
          : "bg-ai-l-blue opacity-50"
      }`}
      disabled={!isEnabled}
      onClick={onClick}
    >
      Join Whitelist
    </button>
  );
}
