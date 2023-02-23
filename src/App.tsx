import type { Component } from "solid-js";

import type SlAlert from "@shoelace-style/shoelace/dist/components/alert/alert";

const App: Component = () => {
  // eslint-disable-next-line prefer-const
  let alert: SlAlert | undefined = undefined;
  return (
    <div>
      <h1>Using Shoelace components in SolidJS</h1>
      <sl-alert ref={alert} prop:variant="danger" prop:open={true}>
        <sl-icon slot="icon" prop:name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </sl-alert>
      <sl-button onClick={() => void alert?.hide()}>Close alert</sl-button>
    </div>
  );
};

export default App;
