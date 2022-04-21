// eslint-disable-next-line import/prefer-default-export
export function groupBy<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K | { (obj: T): string }
): Record<string, T[]> {
  const keyFn = key instanceof Function ? key : (obj: T) => obj[key]
  return array.reduce((objectsByKeyValue, obj) => {
    const value = keyFn(obj)
    // eslint-disable-next-line no-param-reassign
    objectsByKeyValue[value] = [...(objectsByKeyValue[value] || []), obj]
    return objectsByKeyValue
  }, {} as Record<string, T[]>)
}
