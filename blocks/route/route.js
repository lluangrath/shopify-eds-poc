// eslint-disable-next-line import/no-unresolved,import/extensions
import { h, Component, Fragment, render } from '../../scripts/preact.js';
// eslint-disable-next-line import/no-unresolved,import/extensions
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

function App() {
  return html`
    <div>
      <h1>Preact header component</h1>
      <p>This is a description text</p>
    </div>
  `;
}

class RouteComponent extends Component {
render() {
    return html`
      <${Fragment}>
        <div class="route-comp">
          <h3>This is a Route Component</h3>
        </div>
      <//>
    `;
  }
}

export default async function decorate(block) {
    const rtApp = html`<${App}/>`;
    const rt = html`<${RouteComponent} />`;

    render(rt, block);
  }