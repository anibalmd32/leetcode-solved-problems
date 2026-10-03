import { describe, expect, test } from "bun:test";
import { LinkedList } from "./index.ts";

describe("LinkedList", () => {
	describe("prepend operation", () => {
		const numbersLinkedList = new LinkedList<number>();
		numbersLinkedList.prepend(3);
		numbersLinkedList.prepend(8);
		numbersLinkedList.prepend(1);

		test("last element prepend should be the first and first to be the last", () => {
			expect(numbersLinkedList.toArray()).toEqual([1, 8, 3]);
		});

		test("last element prepend shouldn't be last on the list", () => {
			expect(numbersLinkedList.toArray()).not.toEqual([3, 8, 1]);
		});
	});

	describe("append operation", () => {
		const numbersLinkedList = new LinkedList<number>();
		numbersLinkedList.append(5);
		numbersLinkedList.append(9);

		test("last element append should be the last and first to be the first", () => {
			expect(numbersLinkedList.toArray()).toEqual([5, 9]);
		});

		test("last element append shouldn't be first element on the list", () => {
			expect(numbersLinkedList.toArray()).not.toEqual([9, 5]);
		});
	});

	describe("find operation", () => {
		const numbersLinkedList = new LinkedList<number>();
		numbersLinkedList.append(5);
		numbersLinkedList.append(12);
		numbersLinkedList.append(10);

		test("the found number should exists on the list", () => {
			expect(numbersLinkedList.find(12)?.value).toBe(12);
		});

		test("the found number should have the correct next reference", () => {
			expect(numbersLinkedList.find(12)?.next?.value).toBe(10);
		});

		test("the found number shouldn't exists on the list", () => {
			expect(numbersLinkedList.find(1)).toBeNull();
		});
	});
});
