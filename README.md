# React + TypeScript + Vite + Tailwind CSS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---

## Setup

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

Install packages

```shell
yarn install
```

Upgrade packages

```shell
yarn up
```


Start app for developing or checking

```shell
yarn start
```

Build app

>_This will create/override folder_ `dist`

```shell
yarn build
```

Preview build app  

```shell
yarn preview
```

---
