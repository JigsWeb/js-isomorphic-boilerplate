import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import reducers from './redux';
import { App } from './containers'

const app = Express();

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(reducers);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}


function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
      </body>
    </html>
    `
}

app.listen(3000, () => console.info("Server listen on "+ 3000));