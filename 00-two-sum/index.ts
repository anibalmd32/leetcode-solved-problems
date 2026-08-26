
export function twoSum(nums: number[], target: number): number[] {
  const viwed = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!

    if (viwed.has(complement)) {
      return [viwed.get(complement)!, i]
    }

    viwed.set(nums[i]!, i)
  }

  return []
}
