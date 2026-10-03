class ListNode<T> {
	public constructor(
		public value: T,
		public next: ListNode<T> | null = null,
	) {}
}

export class LinkedList<T> {
	private head: ListNode<T> | null = null;
	private tail: ListNode<T> | null = null;

	public prepend(value: T): void {
		const node = new ListNode(value);
		node.next = this.head;
		this.head = node;
		if (!this.tail) this.tail = node;
	}

	public append(value: T): void {
		const node = new ListNode(value);
		if (!this.tail) {
			this.prepend(value);
			return;
		}
		this.tail.next = node;
		this.tail = node;
	}

	public find(value: T): ListNode<T> | null {
		let currentNode = this.head;

		while (currentNode !== null) {
			if (currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}

		return null;
	}

	// used for black box testing only
	public toArray(): T[] {
		const elements = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			elements.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return elements;
	}
}
