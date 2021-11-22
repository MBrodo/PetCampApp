export const SIZE = 30
export const R = SIZE / 4
export const COLOR = '#3DB09D'
export const END_COLOR = '#45c2ad'
export const WIDTH = 3 * SIZE
export const HEIGHT = 3.5 * SIZE

export const arc = (x, y, reverse = false) => `a ${R} ${R} 0 0 ${reverse ? '0' : '1'} ${x} ${y}`

export const H = HEIGHT - SIZE - 3.8 * R
export const W = WIDTH - 2 * R
export const W_2 = WIDTH / 2 - 4 * R
export const S = SIZE - 2 * R
export const d = [
	`M 0 ${R}`,
	arc(R, -R),
	`h ${W}`,
	arc(R, R),
	`v ${H}`,
	arc(-R, R),
	`h ${-W_2}`,
	arc(-R, R, true),
	`v ${S}`,
	arc(-R, R),
	`h ${-S}`,
	arc(-R, -R),
	`v ${-S}`,
	arc(-R, -R, true),
	`h ${-W_2}`,
	arc(-R, -R),
	'Z',
].join(' ')
