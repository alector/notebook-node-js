// __dirname
cwd = __dirname
console.log(cwd) // /Users/panos/alyra/alyra-02-repertoires/notebook-node-js/io-operations

// RELATIVE PATH
const path = require("path")

const a = path.dirname("") // { a: '.' }
console.log({ a })

const b = path.dirname("test-folder") // { b: '.' }
console.log({ b })

// ABSOLUTE PATH
const c = path.join(__dirname, "test-folder") // { c: '/Users/panos/PPCode/alyra/alyra-02-repertoires/notebook-node-js/io-operations-examples/test-folder' }

console.log({ c })

// Make new folder
const fs = require("fs")
// const path = require("path")
const dirPath = path.join(__dirname, "new-folder") ///  full absolute path to the txt

fs.mkdirSync(dirPath)



## Current folder 

1. `path = "./"`
2. `__dirname`
3. 
