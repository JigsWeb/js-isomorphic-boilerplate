import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { browserHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import routes from './src/routes';
import reducers from './src/redux';
import { App } from './src/containers';

const app = Express()
  .use('/static', Express.static(path.join(__dirname, '/static')))
  .use(handleRender);

function handleRender(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      const store = createStore(
        reducers,
        applyMiddleware(
          routerMiddleware(browserHistory)
        )
      );

      let html = (
        <Provider store={store}>
          { <RouterContext {...renderProps} /> }
        </Provider>
      );

      res.status(200).send(renderFullPage(renderToString(html), store))
    } else {
      res.status(404).send('Not found')
    }
  })
}


function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link rel="stylesheet" type="text/css" href="/static/antd.min.css"/>
        <style>
          body{ background: #ECECEC }
          .ant-menu-horizontal { border-bottom: none;}  
        </style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script type="text/javascript" src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(3000, () => console.info("Server listen on "+ 3000));