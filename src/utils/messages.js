let messages = {}

messages.wrongRepo = function(repo) {
  return `<div>出了點問題<br/><br/> 在 ${repo} 倉庫中找不到 contracts.json</div>`
}

messages.wrongNetwork = function(netId) {
  return `您當前并沒有連接到正確的網路.
            請在你的錢包APP (MetaMask or Nifty Wallet) 處切換到正確的網路
            可以在 <a href='https://github.com/GakuenCity/chain-spec/blob/master/README_ZH.md' target='blank'>GitHub</a> 查看更多詳情.
            <b>當前的網路ID</b> 為 <i>${netId}</i>`
}

messages.invalidKeyMsg = function(initialKey, netIdName) {
  return `當前賬號不是初始化密鑰賬號！<br/>
      請檢查您是否已經切換到了正確的網絡及賬號！<br/><br/>
      <b>你當前的賬號/公鑰</b> 是 <i>${initialKey}</i><br/>
      <b>當前的網路</b> 為 <i>${netIdName}</i>`
}

messages.genericError = function(msg) {
  return `<div>
            出了點問題<br/><br/>
            ${msg}
          </div>`
}

messages.NOMETAMASKACCOUNT = `您當前沒有開啟Web3擴充插件. 請在開啟乙太坊瀏覽器擴充插件（<a href="https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn" target='blank'>MetaMask</a> 或者 <a href="https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid" target='blank'>Nifty Wallet</a> 之類）后設置好網路并重新刷新本頁面.`
messages.USERDENIEDTRANSACTIONPATTERN = '用戶取消了合約互動'
messages.TITLE = '鑰匙圈生成DApp'
messages.DENIEDACCESS = '您拒絕了訪問請求'
messages.WARNING = '警告'
messages.AREUSURE = '確定嗎'
messages.ERROR = '錯誤'
messages.CONGRATULATIONS = '恭喜！'
messages.KEYGENERATED = '你的密鑰已經生成!'
messages.TRANSACTIONFAILED = '合約互動出錯'
messages.DOWNLOAD = '下載'
messages.KEYGENERATE = '生成密鑰'
messages.PASSWORD = '密碼'
messages.COPY = '復制'
messages.COPIED = '已復制'
messages.MININGKEY = '挖礦 (Mining) 密鑰'
messages.VOTINGKEY = '投票 (Voting) 密鑰'
messages.PAYOUTKEY = '支付 (Payout) 密鑰'
messages.ATTENTION = '請注意'
messages.HOMETITLE = '將初始化密鑰轉換成鑰匙圈'
messages.HOMETEXT = `在此應用程式中，您將創建挖礦(Mining) 、支付(Payout) 和 投票(Voting) 密鑰。
          <br />
          密鑰創建完成后將會生成壓縮檔并保存到本地，初始化密鑰將在操作完成后失效，請謹慎操作。
          <br />
          請先將錢包切換到我們發送給您的初始化密鑰賬號，然后按照提示進行操作。`
messages.VOTINGKEYTEXT = '下載此密鑰并在您的客戶端節點上使用它來投票，例如在網絡中添加或刪除礦工。'
messages.PAYOUTKEYTEXT = '下載此密鑰并在您的客戶端節點/錢包上使用它來消費獲取到的驗證節點獎勵。'
messages.MININGKEYTEXT = '下載此密鑰并在挖礦節點中使用它來驗證網絡中的塊。驗證獎勵將存入你的支付賬戶。'
messages.WARNINGTEXT =
  '在下載所有密鑰并保存密碼之前，不要關閉此分頁。并注意保持密鑰的安全。如果丟失了密鑰，則需要使用投票DApp獲取新的初始化密鑰。'

module.exports = {
  messages
}
