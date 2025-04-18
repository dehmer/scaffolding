import * as Solid from 'solid-js'

const inc = x => x + 1
const dec = x => x - 1
const CounterContext = Solid.createContext([() => 0, {}])

// More Flyd-like:
const createSignal = initial => {
  const [get, set] = Solid.createSignal(initial)
  return arg => arg ? set(arg) : get()
}

export const CounterProvider = props => {
  const count = createSignal(props.count || 0)
  const store = [
    count,
    {
      inc: () => count(inc),
      dec: () => count(dec)
    }
  ]

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  return Solid.useContext(CounterContext)
}
