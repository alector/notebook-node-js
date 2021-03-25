# Title of text

> Interesting source: **How YOU can learn Node.js I/O, files and paths** https://softchris.github.io/pages/javascript-node-io.html#summary

## Path

```js
const path = require("path")

const filePath = "/path/to/file.txt"
console.log(`Base name ${path.basename(filePath)}`) // file.txt
console.log(`Dir name ${path.dirname(filePath)}`) //  /path/to
console.log(`Extension name ${path.extname(filePath)}`) //.txt
```

## Join + concantenate paths

```js
const join = "/path"
const joinArg = "/to/my/file.txt"

console.log(`Joined ${path.join(join, joinArg)}`) // Joined /path/to/my/file.txt

console.log(`Concat ${path.join(join, "user", "files", "file.txt")}`) //Concat /path/user/files/file.txt
```

## Provide ABSOLUTE path of a RELATIVE path

```js
// the file `info.txt` is in the same level with our js script
console.log(`Abs path ${path.resolve("info.txt")}`) // <this is specific to your system>/info.txt
```

## Normalise paths

> Sometimes we have characters like ./ or ../ in our path. The method normalize() helps us calculate the resulting path. Add the below code to our application file:

```js
console.log(`Normalize ${path.normalize("/path/to/file/../")}`) // Normalize /path/to/
```

## I/O operations (fs API)

### Synchronous version

|      Operation | Description                                                                                   |
| -------------: | :-------------------------------------------------------------------------------------------- |
|   `readFile()` | reads the file content asynchronously                                                         |
| `appendFile()` | adds data to file if it exist - if not then file is created first                             |
|   `copyFile()` | copies the file                                                                               |
|    `readdir()` | reads the content of a directory                                                              |
|      `mkdir()` | creates a new directory                                                                       |
|     `rename()` | renames a file or folder                                                                      |
|       `stat()` | returns the stats of the file like when it was created, how big it is in Bytes and other info |
|     `access()` | check if file exists and if it can be accessed                                                |

### Asynchronous version

> All the above methods exist as synchronous versions as well. All you need to do is to **append the Sync at the end**, for example `readFileSync()`.

## Async vs. Sync: What is the problem with synchronous operations?

- Node.js is single-threaded.
- The consequence of running synchronous operations are therefore that we are blocking anything else from happening.
- This results in much less throughput than if your app was written in an asynchronous way.
- In a synchronous operation, you are effectively stopping anything else from happening, this might make your program less responsive.
- An Asynchronous operation is non-blocking.

(source: softchris.github.io)

## Get the Path of the Current Working Directory in Node.js

> Source: https://coderrocketfuel.com/article/get-the-path-of-the-current-working-directory-in-node-js

### Method 1: `__dirname`

```js
console.log(__dirname) //  /Users/Billy_Bob/projects
const b = path.dirname(myFilename)
```

### Method 2: `process.cwd()`

```js
console.log(process.cwd())
```
