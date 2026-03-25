export default function Loading() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl animate-pulse space-y-8">
        <div className="space-y-4">
          <div className="h-4 w-28 rounded-full bg-secondary" />
          <div className="h-12 max-w-2xl rounded-2xl bg-secondary" />
          <div className="h-5 max-w-3xl rounded-full bg-secondary" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-border bg-card p-8">
            <div className="h-10 w-full rounded-xl bg-secondary" />
            <div className="h-10 w-full rounded-xl bg-secondary" />
            <div className="h-10 w-full rounded-xl bg-secondary" />
            <div className="h-36 w-full rounded-2xl bg-secondary" />
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="h-72 w-full rounded-2xl bg-secondary" />
          </div>
        </div>
      </div>
    </main>
  )
}
