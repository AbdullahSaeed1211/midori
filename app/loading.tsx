import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-charcoal-black gap-4">
      <div className="flex items-center text-3xl font-bold text-off-white">
        kiiro<span className="text-kiiro-yellow">.cx</span>
      </div>
      <Spinner className="h-10 w-10" />
    </div>
  );
}
