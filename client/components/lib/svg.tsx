import React from 'react'

export const Svg = ({ name, ...props }: IProps) => {
	const { height, pathD, viewBox, width } = svgNames[name]

	if (!pathD) {
		throw new Error('Svg name [' + name + '] is not recognized')
	}

	return (
		<svg
			fillRule="evenodd"
			height={height}
			viewBox={viewBox}
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d={pathD} />
		</svg>
	)
}

const svgNames = {
	checkmark: {
		height: 16,
		pathD: 'M14.5 2.793l-9 9-3.648-3.645-.352-.355-.707.707.355.352L5.5 13.207 15.207 3.5z',
		viewBox: '0 0 16 16',
		width: 16,
	},

	cross: {
		height: 16,
		pathD:
			'M2.75 2.043l-.707.707.355.352L7.293 8l-5.25 5.25.707.707L8 8.707l4.895 4.898.355.352.707-.707-.352-.355L8.707 8l5.25-5.25-.707-.707L8 7.293 3.102 2.398z',
		viewBox: '0 0 16 16',
		width: 16,
	},

	edit: {
		height: 16,
		pathD:
			'M12.031 2.023c-.496 0-.965.247-1.355.633l-8.114 8.07-1.355 4.06 4.059-1.352.086-.082 8.035-7.985c.386-.39.629-.86.629-1.355 0-.496-.243-.965-.63-1.356-.39-.386-.859-.633-1.355-.633zm-2.004 2.688l1.293 1.297-6.593 6.554-1.938.645.648-1.941z',
		viewBox: '0 0 16 16',
		width: 16,
	},

	plus: {
		height: 16,
		pathD:
			'M7.5 1A6.51 6.51 0 001 7.5 6.51 6.51 0 007.5 14 6.51 6.51 0 0014 7.5 6.51 6.51 0 007.5 1zm0 1C10.543 2 13 4.457 13 7.5S10.543 13 7.5 13A5.493 5.493 0 012 7.5C2 4.457 4.457 2 7.5 2zM7 4v3H4v1h3v3h1V8h3V7H8V4z',
		viewBox: '0 0 16 16',
		width: 16,
	},

	share: {
		height: 16,
		pathD:
			'M10.605 1.023l-.707.704L12.168 4h-2.043C8 4 6.211 4.934 4.977 6.383 3.742 7.832 3.039 9.785 3 11.863V12h1v-.113c.035-1.871.668-3.606 1.734-4.856C6.804 5.781 8.29 5 10.125 5h2.043l-2.27 2.273.707.704L14.082 4.5zM1 4v8.5c0 .824.676 1.5 1.5 1.5h10c.824 0 1.5-.676 1.5-1.5V9h-1v3.5c0 .281-.219.5-.5.5h-10a.494.494 0 01-.5-.5V4z',
		viewBox: '0 0 16 16',
		width: 16,
	},

	'trash-can': {
		height: 24,
		pathD:
			'M 10 2 L 9 3 L 5 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 21.093063 5.9069372 22 7 22 L 17 22 C 18.093063 22 19 21.093063 19 20 L 19 5 L 20 5 L 20 3 L 19 3 L 18 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z',
		viewBox: '0 0 24 24',
		width: 24,
	},
}

interface IProps {
	className?: string
	name: keyof typeof svgNames
}
