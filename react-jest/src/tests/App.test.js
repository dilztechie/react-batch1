const { render } = require("@testing-library/react");
const { default: App } = require("../App");

test('renders the landing page', () => { render(<App />) })