import React from 'react'

export const App = () => {
  const { versions } = process
  return (
    <>
      <h1>Hello World!</h1>
      <p>
        We are using Node.js <span>{versions.node}</span>,
        Chromium <span>{versions.chrome}</span>,
        and Electron <span>{versions.electron}</span>.
      </p>
    </>
  )
}
