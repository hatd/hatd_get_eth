import HatdGetEth from './index.js';

const hatdGetEth = new HatdGetEth()
hatdGetEth.getBalance("0x65DB1a5ac48d4A97dC0A104D8276d7017208A975",).then(balance => { console.log("Balance without lib: ", balance) })
hatdGetEth.getBalance("0x65DB1a5ac48d4A97dC0A104D8276d7017208A975", "GetEthBalance").then(balance => { console.log("Balance with lib: ", balance) })