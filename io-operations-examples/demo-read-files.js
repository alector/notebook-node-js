function print(a) {
  console.log(a)
}

const path = require("path")
const fs = require("fs")

function getFiles(cur_path) {
  // find all ENTRIES = FILES + FOLDERS in current path

  const entries = fs.readdirSync(cur_path, { withFileTypes: true })
  // isolate the FILES from the ENTRIES in current path
  const files = entries
    .filter(file => {
      return !file.isDirectory()
    })
    .map(file => {
      filename = file.name
      extension = filename.split(".").pop()
      filepath = path.join(cur_path, file.name)
      return { ...file, path: filepath, filename, ext: extension }
    })

  // isolate the FOLDERS from the ENTRIES in current path
  const folders = entries.filter(folder => folder.isDirectory())

  // do the same, recursively, for the contents of all FOLDERS
  // for (const folder of folders) {

  //   console.log(`${path}${folder.name}/`)
  //   files.push(...getFiles(`${path}${folder.name}/`))
  // }

  for (const folder of folders) {
    print(folder) // { folder: Dirent { name: 'test-folder', [Symbol(type)]: 2 } }

    dirPath = path.join(cur_path, folder.name)
    files.push(...getFiles(dirPath))
  }

  return files
}

path_init = path.dirname("")
bb = getFiles(path_init)
console.log(bb)
