export default function LatestShell() {
    // Empty layout shell: left hero slot + right list slot
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
            <div className="rounded-2xl border border-stone-200 bg-white h-80 lg:h-96" />
            <div className="space-y-3">
                <div className="h-20 rounded-xl border border-stone-200 bg-white" />
                <div className="h-20 rounded-xl border border-stone-200 bg-white" />
                <div className="h-20 rounded-xl border border-stone-200 bg-white" />
            </div>
        </div>
    );
}
