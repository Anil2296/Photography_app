import type { Photographer } from '../Common/data';

interface PhotographerCardProps {
  id: string;
  photographer: Photographer;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export function PhotographerCard({ id, photographer, onDelete, onEdit }: PhotographerCardProps) {
  return (
    <div className="photo-card">
      <h2>{photographer.name}</h2>
      <p><strong>Experience Level:</strong> {photographer.level}</p>
      <p><strong>Contact Email:</strong> {photographer.email}</p>
      <p><strong>Number:</strong> {photographer.phone}</p>
      <div className="button-group">
        <button onClick={() => onDelete(id)}>🗑️Delete</button>
        <button onClick={() => onEdit(id)}>✏️Edit</button>
      </div>
    </div>
  );
}