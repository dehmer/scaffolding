import { render } from 'solid-js/web'
import './index.scss'

const App = () => {
  return (
    <div class='App'>
      <header class='header'>
        Hello, Solid!
      </header>
    </div>
  )
}

render(App, document.body)