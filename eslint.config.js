// // Конфігурація ESLint для React проєкту з підтримкою JSX, Vitest, Tailwind CSS та Prettier
// import js from '@eslint/js';
// import globals from 'globals';
// import react from 'eslint-plugin-react';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import vitest from 'eslint-plugin-vitest';
// import prettier from 'eslint-plugin-prettier';
// import prettierConfig from 'eslint-config-prettier';

// export default [
//   {
//     // Ігнорування файлів і папок, які не потребують перевірки
//     ignores: [
//       'dist/', // Збірка проєкту
//       'build/', // Альтернативна папка збірки
//       'node_modules/', // Залежності
//       '.env', // Файли з змінними середовища
//       '*.config.js', // Конфігураційні файли (наприклад, vite.config.js)
//     ],
//   },
//   {
//     // Налаштування для JavaScript та JSX файлів
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       ecmaVersion: 2020, // Підтримка ECMAScript 2020
//       globals: globals.browser, // Глобальні змінні браузера
//       parserOptions: {
//         ecmaVersion: 'latest', // Використання останньої версії ECMAScript
//         ecmaFeatures: { jsx: true }, // Увімкнення JSX
//         sourceType: 'module', // Використання ES-модулів
//       },
//     },
//     plugins: {
//       react, // Плагін для правил, специфічних для React
//       'react-hooks': reactHooks, // Плагін для правил React Hooks
//       'react-refresh': reactRefresh, // Плагін для React Refresh (Vite)
//       prettier, // Інтеграція з Prettier для форматування
//     },
//     settings: {
//       react: {
//         version: 'detect', // Автоматичне визначення версії React
//       },
//     },
//     rules: {
//       ...js.configs.recommended.rules, // Рекомендовані правила ESLint
//       ...react.configs.recommended.rules, // Рекомендовані правила React
//       ...reactHooks.configs.recommended.rules, // Рекомендовані правила React Hooks
//       ...prettierConfig.rules, // Відключення конфліктів з Prettier

//       'no-unused-vars': ['error'], // Заборона невикористаних змінних
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ], // Попередження для React Refresh
//       'react/prop-types': 'off', // Вимкнення PropTypes, оскільки не використовується TypeScript
//       'react/jsx-uses-react': 'off', // Не потрібне для React 17+
//       'react/react-in-jsx-scope': 'off', // Не потрібне для React 17+
//       'prettier/prettier': 'error', // Використання Prettier як правила ESLint
//     },
//   },
//   {
//     // Налаштування для тестових файлів Vitest
//     files: ['**/*.test.{js,jsx}'],
//     plugins: {
//       vitest, // Плагін для Vitest
//     },
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.vitest, // Додаємо глобальні змінні Vitest
//       },
//     },
//     rules: {
//       ...vitest.configs.recommended.rules, // Рекомендовані правила Vitest
//       'vitest/no-disabled-tests': 'warn', // Попередження про відключені тести
//       'vitest/no-focused-tests': 'error', // Заборона використання .only у тестах
//       'vitest/expect-expect': 'error', // Перевірка наявності expect у тестах
//     },
//   },
// ];
