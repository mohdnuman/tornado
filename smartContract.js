const Web3 = require("web3");

const Abi = require("./abi.json");
const Abi2 = require("./abi2.json");

let web3;

const provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/287af69fca9142f3b1681a93ce4c3afa"
);
web3 = new Web3(provider);

async function getBalance(address) {
  const contract = "0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce";
  const contract2 = "0x2FC93484614a34f26F7970CBB94615bA109BB4bf";


  const Instance = new web3.eth.Contract(Abi, contract);
  const Instance2 = new web3.eth.Contract(Abi2, contract2);


  let balance = await Instance.methods.lockedBalance(address).call();
  balance=(balance/10**18).toFixed(2);

  let rewards = await Instance2.methods.checkReward(address).call();
  rewards=(rewards/10**18).toFixed(2);

  if (balance != 0) {
    console.log("balance:", balance,'TORN');
    console.log("rewards:", rewards,'TORN');

  }
}

let address = "0x45f9675804904a6d8116354bd9ba74cdbdbc88ca";
getBalance(address);
