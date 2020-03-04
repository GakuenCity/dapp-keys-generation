let constants = {}

constants.organization = 'GakuenCity'
constants.repoName = 'chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'
constants.baseURL = '/poa-dapps-keys-generation'

constants.NETWORKS = {
  '1004440004': {
    NAME: '核心網路',
    FULLNAME: 'TestNet',
    RPC: 'https://infura.xyd4.com',
    BRANCH: 'core',
    SORTORDER: 1,
    TESTNET: false
  },
  '1014440004': {
    NAME: '測試網路',
    FULLNAME: 'TestNet',
    RPC: 'https://infura.pzhacm.org',
    BRANCH: 'test',
    SORTORDER: 2,
    TESTNET: true
  }
}

module.exports = {
  constants
}
