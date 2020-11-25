const fs = require("fs");

const createNote = function(id,name,answer){

const jsonData = loadNotes(id);
  jsonData.push({
    name:name,
    answer:answer
  })
  const stringifyData = JSON.stringify(jsonData);
  fs.writeFileSync(__dirname+`/json/${id}.json`,stringifyData);

}

const displayNote = function(id){
    return loadNotes(id);
}


const loadNotes = function(id){
try{
  const bufferData = fs.readFileSync(__dirname+`/json/${id}.json`);
  const stringData = bufferData.toString();
  return  JSON.parse(stringData);
}
catch(e){

  return [];
}

}

module.exports = {
  createNote:createNote,
  displayNote:displayNote
}
