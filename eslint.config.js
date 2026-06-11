import svelteConfig from './svelte.config.js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default defineConfig(
	{
		ignores: [
			'.DS_Store',
			'build/**',
			'.svelte-kit/**',
			'package/**',
			'.env',
			'.env.*',
			'!**/.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	},
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	{
		rules: {
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/require-each-key': 'off',
			'svelte/no-at-html-tags': 'off',
			'svelte/no-useless-mustaches': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			]
		}
	}
);
