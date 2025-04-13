
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				maison: ['Maison Neue', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				vasee: {
					dark: '#10131A',
					charcoal: '#14161F',
					gray: '#8E9196',
					light: '#D6BCFA',
					accent: '#9b87f5',
					glow: '#b18aff',
					vibrant: '#8B5CF6',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'text-reveal': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slow-zoom': {
					'0%': {
						transform: 'scale(1)'
					},
					'100%': {
						transform: 'scale(1.05)'
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 5px rgba(177, 138, 255, 0.7))' 
					},
					'50%': { 
						filter: 'drop-shadow(0 0 20px rgba(177, 138, 255, 0.9))' 
					}
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -5%)' },
					'20%': { transform: 'translate(-10%, 5%)' },
					'30%': { transform: 'translate(5%, -10%)' },
					'40%': { transform: 'translate(-5%, 15%)' },
					'50%': { transform: 'translate(-10%, 5%)' },
					'60%': { transform: 'translate(15%, 0)' },
					'70%': { transform: 'translate(0, 10%)' },
					'80%': { transform: 'translate(-15%, 0)' },
					'90%': { transform: 'translate(10%, 5%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-delay-1': 'fade-in 0.7s ease-out 0.3s forwards',
				'fade-in-delay-2': 'fade-in 0.7s ease-out 0.6s forwards',
				'fade-out': 'fade-out 0.7s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'text-reveal': 'text-reveal 0.8s ease-out forwards',
				'text-reveal-delay-1': 'text-reveal 0.8s ease-out 0.3s forwards',
				'text-reveal-delay-2': 'text-reveal 0.8s ease-out 0.6s forwards',
				'slow-zoom': 'slow-zoom 15s ease-out alternate infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'grain': 'grain 8s steps(10) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
