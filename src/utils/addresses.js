import { constants } from './constants'
import helpers from './helpers'

export default web3Config => {
  const branch = constants.NETWORKS[web3Config.netId].BRANCH
  return new Promise((resolve, reject) => {
    fetch(helpers.addressesURL(branch))
      .then(response => {
        response.json().then(json => {
          resolve({ addresses: json, web3Config })
        })
      })
      .catch(function(err) {
        let addr = helpers.addressesURL(branch)
        helpers.wrongRepoAlert(addr)
        reject(err)
      })
  })
}
