require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["dcab9143af70be6ed96090f6b38889e09dd394524dc7981a8578dd0463850ae1"],
      chainId: 1337,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ZdVcHNSk-pqrbOCh2j1texwsadxR9zCU",
      accounts: ["c0c0a601fb27cd6ed96ee79f5452427f7a2e7c1b19450e928611a33286b06454"],
      chainId: 5,
    },
  },
};


