class NodeList<T> {
	public constructor(
		public value: T,
		public next: NodeList<T> | null = null,
	) {}
}

export class LinkedList<T> {
	public head: NodeList<T> | null = null;
	public tail: NodeList<T> | null = null;

	public prepend(value: T): void {
		const node = new NodeList(value);
		node.next = this.head;
		this.head = node;
		if (!this.tail) this.tail = node;
	}

	public append(value: T): void {
		const node = new NodeList(value);
		if (!this.tail) {
			this.prepend(value);
			return;
		}
		this.tail.next = node;
		this.tail = node;
	}
}
