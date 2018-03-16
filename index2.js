// const permutate = letters =>
const regex = /.[TYL]RP...C/;
const solve = regex => row => row.filter(e => e.match(regex))

// solve(regex)()

// PAID..
// VISA... big
// figo xs2a
// solarisBank
// root... card api (make creadit card programatically
// deutche bank program

// CHELLAG+NGE:
// PSD2
// API that are revelant for bank
// heatmaps of bank accounts
// UK open banking
// psd2 sandbox


// PSD2 : peymant service directive 2,  access to past transactions, you can trigger payment
const brain = require('brain')
var net = new brain.NeuralNetwork()

net.train([
  { input: '1992.01.01', output: '1992.01.01' },
  { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
  { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } }
])

var output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
console.log(output)
