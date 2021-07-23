export default function getItem<T>(key: string): T | null {
  const item = localStorage.getItem(key);

  if (item == null) {
    return null;
  }

  return JSON.parse(item);
}
