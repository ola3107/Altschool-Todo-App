/* bling.js */

window.$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
}

function mk(type, props, children) {
  let elem = document.createElement(type);
  if (props) Object.assign(elem, props);
  if (children) elem.prepend(...children);
  return elem;
}

window.mk = mk;
