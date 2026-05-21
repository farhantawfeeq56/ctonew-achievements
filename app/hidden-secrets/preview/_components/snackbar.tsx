type SnackbarProps = {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  isVisible?: boolean;
};

export function Snackbar({
  message = "Click the button here to simulate daily usage limit being reached",
  actionLabel = "Click here",
  onAction,
  isVisible = true,
}: SnackbarProps) {
  return (
    <div
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <aside className="[font-synthesis:none] flex w-full max-w-[802px] items-center gap-[200px] rounded-[14px] bg-[#212531] p-5 antialiased">
        <p className="font-sans text-[16px] leading-[20px] text-white">{message}</p>

        <button
          type="button"
          onClick={onAction}
          className="shrink-0 cursor-pointer rounded-lg bg-[#5141F9] px-[10px] py-[10px] font-sans text-[16px] leading-[20px] text-white transition-colors hover:bg-[#5f51ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#212531]"
        >
          {actionLabel}
        </button>
      </aside>
    </div>
  );
}
