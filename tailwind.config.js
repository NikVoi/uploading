/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				0.1: '1px',
				60: '25rem',
				30: '20rem',
				100: '30rem',
			},

			animation: {
				rotate: 'rotate 1s linear infinite',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},

			keyframes: {
				rotate: {
					'100%': { transform: 'rotate(360deg)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
			},
		},
	},
	plugins: [],
}
