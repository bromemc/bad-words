const fs = require("fs");
const infile = __dirname + '/badwords.txt';
const outfile_pre  = __dirname + '/badwords';
const outfile_json = outfile_pre + '.json';
const outfile_txt = outfile_pre + '.txt';

const list = fs
  .readFileSync(infile, 'utf8')
  .split("\n")
  .map(function(e) { return e.trim() })
  .filter(function(e) { return (e.length > 0) })
  .filter(function(e) { return e.charAt(0) !== '#' })
  .sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

fs.writeFileSync(outfile_json, JSON.stringify(list, null, 2));

fs.writeFileSync(outfile_txt, list.reduce(
  function(p, c){
    return p + c + '\n'
  }, list.shift() + '\n')
);

// reappend the instructions
fs.appendFileSync(
  outfile_txt,
  "#\n" +
  "# please don't add your badwords down here!\n" +
  "# insert them in alphabetical order to help reduce merge conflicts.\n" +
  "#\n" +
  "# <3\n"
)