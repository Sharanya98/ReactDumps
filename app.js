const header = React.createElement('h1',{ id: 'header'},'welcome to react')

const root = document.getElementById('root')
const render = ReactDOM.createRoot(root)
render.render(header)