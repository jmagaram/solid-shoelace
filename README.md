## Using Shoelace components in SolidJS

This is based on the SolidJS starter TypeScript template as of Feb-23-2013. The purpose of this is to provide a working example of how to **cherry pick** specific components and have them **installed locally via npm** to minimize bundle size.

### Necessary steps:

Install `@shoelace-style/shoelace`

Install `vite-plugin-static-copy`. Configure it to copy the shoelace icons and other assets from `node_modules` to a folder named `shoelace-assets` in the `dist` folder. This will happen on each build. See `vite.config.ts` for details. You could do it manually instead.

In `index.html` reference the Shoelace style sheets. Probably could do this somewhere else; I'm not sure.

In `index.tsx` import only the specific components you want to use in your app. Also do the `setBasePath` thing so Shoelace can find the icons and other assets.

Create a `declaration.d.ts` file. This has some TypeScript magic that prevents errors about unknown elements in your `tsx`.

To use the components, see `App.tsx`. Do `import type...` to get reference to the TypeScript types of the components you want to work with. Use `ref` to programmatically access it. A couple gotchas: (1) Prefix the Shoelace component prop names with `prop:`. (2) If a prop is a singleton boolean like `open` specify it as `prop:open={true}`.
