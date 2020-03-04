import { constants } from './constants'
import { messages } from './messages'
import swal from 'sweetalert'

var toAscii = function(hex) {
  var str = '',
    i = 0,
    l = hex.length
  if (hex.substring(0, 2) === '0x') {
    i = 2
  }
  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16)
    if (code === 0) continue // this is added
    str += String.fromCharCode(code)
  }
  return str
}

function addressesURL(branch) {
  const URL = `https://raw.githubusercontent.com/${constants.organization}/${constants.repoName}/${branch}/${constants.addressesSourceFile}`
  console.log(URL)
  return URL
}

function ABIURL(branch, contract) {
  const URL = `https://raw.githubusercontent.com/${constants.organization}/${constants.repoName}/${branch}/abis/${constants.ABIsSources[contract]}`
  console.log(URL)
  return URL
}

function getABI(branch, contract) {
  let addr = ABIURL(branch, contract)
  return fetch(addr).then(function(response) {
    return response.json()
  })
}

function wrongRepoAlert(addr) {
  var content = document.createElement('div')
  content.innerHTML = messages.wrongRepo(addr)
  swal({
    icon: 'error',
    title: messages.ERROR,
    content: content
  })
}

let helpers = {
  toAscii,
  addressesURL,
  ABIURL,
  getABI,
  wrongRepoAlert
}

export default helpers
