/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

import "@shoelace-style/shoelace/dist/components/alert/alert";
import "@shoelace-style/shoelace/dist/components/icon/icon";
import "@shoelace-style/shoelace/dist/components/button/button";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
setBasePath("/shoelace-assets");

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(() => <App />, root!);
