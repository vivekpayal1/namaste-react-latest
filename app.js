const heading1 = React.createElement(
	'h1',
	{ id: 'title1', className: 'heading1' },
	'heading 1'
);
const heading2 = React.createElement(
	'h2',
	{ id: 'title2', className: 'heading2' },
	'heading 2'
);
const container = React.createElement(
	'div',
	{ id: 'container', className: 'container' },
	[heading1, heading2]
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
