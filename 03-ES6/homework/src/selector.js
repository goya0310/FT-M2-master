var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  
  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl); // si el elemento inicial matchea pushear
  for (let i = 0; i<startEl.children.length; i++){ // sino se hace un array con todos los nodos hijos
    const child = startEl.children[i];
    // hago recursion con child, si matchea para que resultSet no se pierda x scope se guarda resultado en vble
    let found = traverseDomAndCollectElements(matchFunc, child); // va guardando los resultSet en cada recursion
    resultSet = [...resultSet, ...found] // concateno los rdos, si un una recursion no matchea no pasa nada al concatenar
  }

  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.split('.').length > 1) return 'tag.class';
  // if(selector.split('>').length > 1) return 
  else return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction = function (elemento){
  if (selectorType === "id") { 
    return elemento.id === selector.substring(1);  // o `#${elemento.id}`
  } else if (selectorType === "class") {
    if(elemento.classList.contains(`${selector.substring(1)}`)) return true;
    else return elemento.className === selector.substring(1);
  } else if (selectorType === "tag.class") {
    if(elemento.tagName && (elemento.tagName.toLowerCase() === selector.split('.')[0].toLowerCase())){
      if(elemento.classList.contains(`${selector.split('.')[1].toLowerCase()}`)) return true;
      else return elemento.className === selector.split('.')[1].toLowerCase();
    }
    else return false;
    
  } else if (selectorType === "tag") {
    return elemento.tagName && (elemento.tagName.toLowerCase() === selector.toLowerCase());
  }
  };
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
