import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'
import { messages } from './utils/messages'
window.addEventListener('beforeunload', function(event) {
  event.returnValue = messages.AREUSURE
})
ReactDOM.render(<App generateKeysIsDisabled={true} />, document.getElementById('root'))
registerServiceWorker()
