import { TarotCard } from '../App';

export interface SavedReading {
  id: string;
  date: string;
  cards: TarotCard[];
  spreadType: 'single' | 'three' | 'five';
}

const STORAGE_KEY = 'tarot_saved_readings';

export function saveReading(cards: TarotCard[], spreadType: 'single' | 'three' | 'five'): string {
  const readings = getSavedReadings();
  const id = Date.now().toString();
  const newReading: SavedReading = {
    id,
    date: new Date().toISOString(),
    cards,
    spreadType,
  };

  readings.unshift(newReading);

  // Keep only last 20 readings
  if (readings.length > 20) {
    readings.splice(20);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
  return id;
}

export function getSavedReadings(): SavedReading[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error reading saved readings:', error);
    return [];
  }
}

export function deleteReading(id: string): void {
  const readings = getSavedReadings();
  const filtered = readings.filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
