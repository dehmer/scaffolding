import { render } from 'solid-js/web'
import { CounterProvider, useCounter } from './counter-store'
import './global.css'

const MiddleComponent = () => <NestedComponent/>

const NestedComponent = () => {
  const [count, { inc, dec }] = useCounter()
  return (
    <>
      <p>{count()}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  )
}

const App = () => (
  <CounterProvider count={7}>
    <MiddleComponent />
  </CounterProvider>
)

render(App, document.body)