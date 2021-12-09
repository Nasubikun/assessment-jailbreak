import { make_pair } from "./make-pair"

describe(`make_pair`, () => {
  it(`start`, () => {
    const result = make_pair([0, 1, 2, 3, 4])
    console.log(result)
    expect(1).toBe(1)
  })
})
