import seedrandom from "seedrandom";

const rng: () => number = seedrandom("32");

export function rand(lo: number, hi: number) {
	if (lo > hi) {
		throw new Error("the first argument should be lower than the second");
	}
	return lo + rng() * (hi - lo);
}

export function getLerpedColors(
	color1: [number, number, number],
	color2: [number, number, number],
	numColors: number
) {
	return range(numColors).map((i) =>
		lerpColors(color1, color2, i / (numColors - 1))
	);
}

export function lerpColors(
	color1: [number, number, number],
	color2: [number, number, number],
	amount: number
) {
	return [
		lerpDeg(color1[0], color2[0], amount),
		lerp(color1[1], color2[1], amount),
		lerp(color1[2], color2[2], amount),
	] as [number, number, number];
}

export function lerp(a: number, b: number, amount: number) {
	if (amount < 0 || amount > 1) {
		throw new Error("amount must be between 0 and 1");
	}
	return a + (b - a) * amount;
}

function lerpDeg(a: number, b: number, amount: number) {
	if (a < 0 || a > 360 || b < 0 || b > 360) {
		throw new Error("both inputs should be between 0 and 360");
	}

	if (Math.abs(b - a) <= 180) return lerp(a, b, amount);

	if (a < b) return lerp(a + 360, b, amount) % 360;
	return lerp(a, b + 360, amount) % 360;
}

export function range(a: number, b?: number) {
	if (!b) {
		return Array.from({ length: a }).map((_, i) => i);
	}
	return Array.from({ length: b - a }).map((_, i) => i);
}

export function colorToString(color: [number, number, number]) {
	const [h, s, l] = color;
	// h = Math.round(h);
	// s = Math.round(s);
	// l = Math.round(l);
	return `hsl(${h}deg ${s}% ${l}%)`;
}
