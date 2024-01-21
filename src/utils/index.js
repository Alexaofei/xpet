import { ethers } from 'ethers';
import config from '@/config';

export async function checkConnect() {
  console.log(ethers);
  let provider;
  if (typeof window.ethereum !== 'undefined') {
    try {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log('provider===', provider);
      // 请求用户授权
      await provider.send('Account 2', []);
      const signer = provider.getSigner();
      // 获取账号地址
      const address = await signer.getAddress();
      //查询余额
      provider.getBalance(address).then((balance) => {
        // 余额是 BigNumber (in wei); 格式化为 ether 字符串
        let etherString = ethers.utils.formatEther(balance);
        console.log('Balance: ' + etherString);
      });
    } catch (e) {
      console.error('用户拒绝了访问');
    }
  } else {
    console.log('请安装MetaMask!');
  }
}

export async function createWalletByPhrase(phrase = '', privateKey = '') {
  console.log(ethers);
  if (!phrase && !privateKey) {
    console.error('助记词和私钥至少填一个');
    return;
  }
  // 默认路径
  //   const path = ethers.utils.defaultPath;
  // 钱包私钥
  let _privateKey;
  if (phrase) {
    // 要导入的钱包助记词
    try {
      const mnemonic = ethers.Wallet.fromMnemonic(phrase);
      console.log(mnemonic);
      _privateKey = mnemonic.privateKey;
    } catch (err) {
      console.error(err);
    }
  } else {
    _privateKey = privateKey;
  }

  // 通过钱包私钥创建钱包实例
  let wallet;
  try {
    wallet = new ethers.Wallet(_privateKey);
    console.log(wallet);
  } catch (err) {
    console.error(err);
  }

  // 钱包公钥
  const publicKey = wallet.publicKey;
  // 钱包地址
  const address = wallet.address;

  // 通过用户设置的密码生成keystore文件
  const keystore_string = await wallet.encrypt(config.ETHER_PASSWORD);
  const keystore_json = JSON.parse(keystore_string);
  console.log('wallet===', wallet);
  console.log('keystore_string=== keystore_string');
}

export function getWallet(wallet) {
  return ethers.Wallet.createRandom();
}
