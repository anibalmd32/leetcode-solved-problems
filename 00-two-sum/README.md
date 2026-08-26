# 00-two-sum

## Description
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Solution

This problem there are two ways to approach it.

One based on brute force that generates an exponetial computational effort described by an algorithm O(n^2), and another bases on memorization that generates a linear computational effort described by an algorithm O(n)

### Brute force solution

```typescript
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if ((nums[i] + nums[j]) === target) {
        return [i, j]
      }
    }
  }
  return []
}
```

In this case an array of 4 elements generates 16 iterations but one of 1.000.000 elements generates 1.000.000.000 iterations.

### Memorization solution

```typescript
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
```

Now, the computational effort is lineal an a data structure remember if the target complement already has been viewed, get the index and return it.
