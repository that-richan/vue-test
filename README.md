# vue-test

Project to test most features in the documentation of Vue 3.3+. Also a little bit of Pinia (well.. most of it, 
because Pinia is very simple and small).

## Some notes

- WebStorm has a few bugs with Vue 3.3+.
  - withDefaults argument type does not get inferred for some reason
  - defineSlots does not work
  - defineExpose does not work correctly and breaks TS
  - Custom directives are not recognized when added outside the root component initalization
- Imported Vue Components in TS files are not recognized and don't seem to have a good solution
  - One of the solutions is to add this into a `*.d.ts` file:
    ```ts
    declare module "*.vue" {
      import type { DefineComponent } from "vue";
      const component: DefineComponent<{}, {}, any>;
      export default component;
    }
    ```
    but this basically just tells the compiler to treat all imports of `.vue` as Vue Components, even when they don't exist.

Features i did not try in this test project:
- Teleports (me being lazy)
- Custom v-model (me being lazy)
- Vue templates directly in the DOM
- Plugins
  - Am aware of the need to augment custom global properties in TypeScript
  - But I am using Pinia! 🙂
- SSR
- Options API
  - I do not like it. I think it is a bad idea to use it in Vue 3.
- Suspense
  - Marked as an Experimental Feature, so I hope noone uses it in production :)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
