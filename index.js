function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild() {
  var elements = document.querySelector('div#grand-node');
  while (elements.children && elements.children.length > 0) {
    elements = elements.children[0];
  }
  return elements;
}
