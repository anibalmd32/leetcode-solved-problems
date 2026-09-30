import { describe, expect, test } from "bun:test";
import { LinkedList } from "./index.ts";

describe("LinkedList", () => {
	test("prepend", () => {
		const numbersLinkedList = new LinkedList<number>();
		numbersLinkedList.prepend(3);
		numbersLinkedList.prepend(8);
		numbersLinkedList.prepend(1);

		expect(numbersLinkedList.head).toBeInstanceOf(Object);
		expect(numbersLinkedList.tail).toBeInstanceOf(Object);
		if (numbersLinkedList.head && numbersLinkedList.tail) {
			expect(numbersLinkedList.head.value).toBe(1);
			expect(numbersLinkedList.tail.value).toBe(3);
		}
	});

	test("append", () => {
		const numbersLinkedList = new LinkedList<number>();
		numbersLinkedList.append(5);
		numbersLinkedList.append(9);

		expect(numbersLinkedList.head).toBeInstanceOf(Object);
		expect(numbersLinkedList.tail).toBeInstanceOf(Object);
		if (numbersLinkedList.head && numbersLinkedList.tail) {
			expect(numbersLinkedList.head.value).toBe(5);
			expect(numbersLinkedList.tail.value).toBe(9);
		}
	});
});
