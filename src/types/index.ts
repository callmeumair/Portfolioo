export type StrList = readonly string[]

export const toMutable = <T,>(arr: readonly T[]): T[] => Array.from(arr)


