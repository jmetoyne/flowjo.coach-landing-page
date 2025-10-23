import Image from "next/image";

export function AppMockup() {
  return (
    <div className="relative mx-auto max-w-xs overflow-hidden rounded-3xl border-8 border-slate-900/5 bg-white shadow-2xl">
      <div className="absolute right-3 top-3 rounded-full bg-brand-ember px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        Beta
      </div>
      <Image
        src="/flowjo-mock.svg"
        alt="Preview of the Flowjo mobile experience"
        width={360}
        height={720}
        priority
        className="h-full w-full object-cover"
      />
    </div>
  );
}
