export default function JoinWhitelistButton({
  className = "",
  isEnabled = true,
  onClick = () => {},
}) {
  return (
    <button
      className={`${className} w-min whitespace-nowrap rounded-full px-14 py-6 font-inter text-[1.8rem] font-semibold uppercase tracking-[0.16em] text-white  transition ${
        isEnabled
          ? "bg-ai-blue opacity-100 shadow-ai-button hover:brightness-125 active:brightness-90"
          : "bg-ai-l-blue opacity-50"
      }`}
      disabled={!isEnabled}
      onClick={onClick}
    >
      Download MailTime
    </button>
  );
}
