const fs = require('node:fs/promises');
const path = require('node:path');

// This way I can pass the folder as an argument in the terminal:
// node 8.ls-advanced.js folderName
const folder = process.argv[2] ?? '.';

async function ls (directory) {
  let files 
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.log('No such file or directory' + directory);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats
    try {
      stats = await fs.stat(filePath);
    } catch {
      console.log('Error reading file ' + file);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : '-';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`;
  })

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);


