# use-luminance

## introduction

`use-luminance` is a simple, fast, and efficient luminance calculation hook.

it use the `useDeferredValue` hook to calculate the luminance of a color.

it can alse provide a `useTheme` hook to calculate current theme based on the luminance of `background-color`.

## install

**with npm**

```sh
npm install --save use-luminance
```

**with yarn**

```sh
yarn add use-luminance
```

## usage

```tsx
import { useLuminance } from "use-luminance";

function App() {
  const luminance = useLuminance(color);
  return <div>{luminance}</div>;
}
```

```tsx
import { useTheme } from "use-luminance";

function App() {
  const theme = useTheme(color);
  return <div>{theme}</div>;
}
```

## API

- `useLuminance(color: string):number`
- `useTheme(color: string):'light'|'dark'`

## demo

[click me to view](https://codesandbox.io/s/use-luminance-demo-56tvhu?file=/src/App.tsx)

## licence

MIT
