import * as XLSX from 'xlsx'
import dl from 'js-file-download'
var Blob = require('blob')
var fs = require('fs')

function writeFile(filename, filedata, sheetname) {
  if (sheetname !== undefined) {
    var ws_name = sheetname
  } else {
    ws_name = 'Sheet1'
  }
  const wb = XLSX.utils.book_new()
  const ws = XLSX.utils.json_to_sheet(filedata)
  XLSX.utils.book_append_sheet(wb, ws, ws_name)
  XLSX.writeFile(wb, filename)
}

function readFile(filename) {
  const workbook = XLSX.readFile(filename)
  const sheet_name_list = workbook.SheetNames
  const filedata = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
  return filedata
}

export default { writeFile, readFile }
