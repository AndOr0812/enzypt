require('dotenv').config()
const Web3 = require('web3')
const config = require('../config')

console.log(process.env.NETWORK)

const web3 = new Web3(config.ETH_NODE_RPC_URL[process.env.NETWORK])

module.exports = web3