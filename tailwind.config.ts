import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primaryColor: '#05F1F5',
                gradientStart: '#ff7854',
                gradientEnd: '#FF9EB5',
            },
            fontFamily: {
                nunito: ['--font-nunito'],
                playwrite: ['var(--font-playwrite)'],
                poppins: ['var(--font-poppins)'],
                code: ['var(--font-code)'],
            },
        },
    },
    plugins: [],
} satisfies Config;
