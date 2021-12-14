export const make_pair = (array: readonly number[]): number[][] => {
  const result: number[][] = []

  const dfs = (f: number, ...rest: number[]): void => {
    const n = rest.length
    for (let i = 0; i < n; ++i) {
      const s = rest[i] as number
      result.push([f, s])

      // 残り
      const rest_of_rest = rest.filter((_, vi) => vi !== i)
      if (rest_of_rest.length <= 1) {
        continue
      }
      const rf = rest_of_rest[0] as number
      dfs(rf, ...rest_of_rest)
    }
  }

  const f = array[0] as number
  const rest = array.slice(1)
  dfs(f, ...rest)
  return result
}
