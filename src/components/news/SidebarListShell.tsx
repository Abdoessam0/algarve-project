export default function SidebarListShell({ title = "Recent / Related" }: { title?: string }) {
    return (
        <aside className="rounded-2xl border border-stone-200 bg-white p-4">
            <h4 className="font-semibold mb-3">{title}</h4>
            <div className="space-y-3">
                <div className="h-16 rounded-lg border border-stone-200 bg-white" />
                <div className="h-16 rounded-lg border border-stone-200 bg-white" />
                <div className="h-16 rounded-lg border border-stone-200 bg-white" />
            </div>
        </aside>
    );
}
