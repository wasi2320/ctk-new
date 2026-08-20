/** Route-level loading UI for the force-dynamic careers page. */
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#f4f7fb]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#0972d3]/25 border-t-[#0972d3] rounded-full animate-spin" />
        <p className="text-[#5a6b81] text-sm">Loading roles…</p>
      </div>
    </div>
  );
}
