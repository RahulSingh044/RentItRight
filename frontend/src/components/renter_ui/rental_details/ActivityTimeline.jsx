export default function ActivityTimeline({ timeline }) {
  return (
    <div className="bg-surface border-1 border-app/80 rounded-2xl p-6">
      <h3 className="text-sm font-bold uppercase mb-6">Activity Timeline</h3>

      <div className="space-y-6">
        {timeline.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="size-6 rounded-full bg-accent flex items-center justify-center">
              <span className="material-symbols-outlined text-xs">check</span>
            </div>
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-xs text-text-secondary">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
