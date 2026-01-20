import { BookMarked } from 'lucide-react';

interface SavedReadingsButtonProps {
  onClick: () => void;
}

export function SavedReadingsButton({ onClick }: SavedReadingsButtonProps) {
  return (
    <button
      id="saved-readings-btn"
      onClick={onClick}
      className="btn-icon absolute top-6 right-6"
      aria-label="Voir les tirages sauvegardés"
    >
      <BookMarked className="w-5 h-5" />
    </button>
  );
}