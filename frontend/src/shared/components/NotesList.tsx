// Global NotesList — amber note box for informational notes.
// Used wherever section-level "Note: …" lines appear.

type NotesListProps = {
  notes: string[];
};

export function NotesList({ notes }: NotesListProps) {
  if (notes.length === 0) return null;

  return (
    <ul className="space-y-1.5 rounded-xl border border-[color:var(--color-note-border)] bg-[color:var(--color-note-bg)] px-4 py-3">
      {notes.map((note) => (
        <li key={note} className="flex items-start gap-2 text-sm font-medium text-amber-900">
          <span className="mt-0.5 shrink-0 text-amber-500">📌</span>
          {note}
        </li>
      ))}
    </ul>
  );
}
