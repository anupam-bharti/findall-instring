
/**
 * @param hayStack String
 * @param tosearch Array
 * 
 * @return Object
 */
function findme(haystack, tosearch, caseSensitive){
  
  let checkCase = (caseSensitive == 0) ? 'gi' : 'g';  
  let output = {
    'count':[],
    'indexes':[],
  };

  if(!haystack || !tosearch){    
    return output;
  }

  if(tosearch.constructor.name != 'Array'){    
    return output;
  }

  if(haystack.constructor.name != 'String'){
    return output;
  }

  // iterate searching array
  for (let key in tosearch) {
    let needle = tosearch[key];    
    var re = new RegExp(needle, checkCase);
    
    var matched = str.match(re);
    
    if(matched){
      
      output['count'][needle] = matched.length;
      output['indexes'][needle] = _getAllIndexes(haystack, needle, caseSensitive);
      
    }
  }

  return output;
}

/**
 * @param string String
 * @param val String
 * 
 * @return val Array
 */
function _getAllIndexes(string, val, caseSensitive) {

    if(!caseSensitive){      
      string = string.toLowerCase();
      val = val.toLowerCase();
    }
    

    let indexes = [], i = -1;
    while ((i = string.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

module.exports = findmeEveryWhere;
