import { expect, test, describe } from "bun:test"
import { twoSum } from "."

describe("two sum test", () => {
  test("when target is 9", () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const result = twoSum(nums, target)
    const expected = [0, 1]

    expect(result).toBeArray()
    expect(result).toEqual(expected)
  })

  test("when target is 6", () => {
    const nums = [3, 2, 4]
    const target = 6
    const result = twoSum(nums, target)
    const expected = [1, 2]

    expect(result).toBeArray()
    expect(result).toEqual(expected)
  })

  test("when target is 6", () => {
    const nums = [3, 3]
    const target = 6
    const result = twoSum(nums, target)
    const expected = [0, 1]

    expect(result).toBeArray()
    expect(result).toEqual(expected)
  })
})
