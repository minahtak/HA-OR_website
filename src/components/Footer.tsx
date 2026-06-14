export function Footer() {
  return (
    <footer className="bg-slate-900 text-stone-300 px-6 md:px-10 py-12 flex flex-col items-center justify-between gap-12 mt-auto">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-center md:text-left">
          <div>
            <div className="text-[8px] uppercase tracking-[0.2em] mb-2 text-slate-500">Current Project</div>
            <div className="text-[11px] tracking-wide font-light text-stone-300">1st Project : Jerusalem Pre-Order</div>
          </div>
          <div>
            <div className="text-[8px] uppercase tracking-[0.2em] mb-2 text-slate-500">Next Dispatch</div>
            <div className="text-[11px] tracking-wide font-light text-stone-300">Sept. 2026 - Seoul</div>
          </div>
        </div>

        <div className="text-[9px] font-light text-center md:text-right uppercase tracking-[0.2em] leading-[1.8] text-slate-500">
          © 2026 HA'OR.<br className="hidden md:block" />CURATED BY A STUDENT CREATOR.<br/>IN JERUSALEM.
        </div>
      </div>
    </footer>
  );
}
