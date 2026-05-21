type SnackbarProps = {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function Snackbar({
  message = "This is a dummy preview of the achievements screen.",
  actionLabel = "Got it",
  onAction,
}: SnackbarProps) {
  return (
    <aside className="[font-synthesis:none] flex w-full max-w-[802px] items-center gap-[200px] rounded-[14px] bg-[#212531] p-5 antialiased">
      <p className="font-sans text-[16px] leading-[20px] text-white">{message}</p>

      <button
        type="button"
        onClick={onAction}
        className="shrink-0 rounded-lg bg-[#5141F9] px-[10px] py-[10px] font-sans text-[16px] leading-[20px] text-white transition-colors hover:bg-[#5f51ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#212531]"
      >
        {actionLabel}
      </button>
    </aside>
  );
}
