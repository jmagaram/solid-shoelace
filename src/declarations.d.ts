import "solid-js"; // Do not know if this is required

// For custom web components based on this:
// https://github.com/solidjs/solid/issues/616
declare module "solid-js" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type ElementProps<T> = {
      // Add both the element's prefixed properties and the attributes
      [K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]>;
    };
    // Prefixes all properties with `prop:` to match Solid's property setting syntax
    type Props<T> = {
      [K in keyof T as `prop:${string & K}`]?: T[K];
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {}
  }
}
