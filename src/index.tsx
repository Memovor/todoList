import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import Main from './main'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
// React.StrictMode最佳实践: https://reactjs.org/docs/strict-mode.html
root.render(
  <>
    <Main />
  </>
)
