export default function debounce<Args extends unknown[]>(func: (...args: Args) => unknown, wait: number): ((...args: Args) => void)[];
