// Toggle primitive values (e.g. string, number, boolean)
export function togglePrimitiveInArray<T>(array: readonly T[], value: T): T[] {
  return array.includes(value)
    ? array.filter((v) => v !== value)
    : [...array, value];
}

// Toggle objects based on 'id' property
export function toggleObjectInArray<T extends { id: string | number }>(
  array: readonly T[],
  item: T
): T[] {
  return array.some((obj) => obj.id === item.id)
    ? array.filter((obj) => obj.id !== item.id)
    : [...array, item];
}
