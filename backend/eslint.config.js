import globals from 'globals';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
    {
        files: ['**/*.{js,ts}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': typescript,
            prettier
        },
        rules: {
            // Basic TypeScript rules
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': ['error', { 
                'argsIgnorePattern': '^_|next',
                'varsIgnorePattern': '^_'
            }],

            // Formatting
            'prettier/prettier': 'error',
            
            // Common preferences
            'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
            'no-debugger': 'error',
            'no-duplicate-imports': 'error'
        }
    }
]; 