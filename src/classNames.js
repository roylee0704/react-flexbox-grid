import style from 'flexboxgrid';

function defaultClassNameLookup(className) {
  return style[className] || className;
}

let classNameLookup = defaultClassNameLookup;

export function setClassNameLookup(fn) {
  classNameLookup = fn || defaultClassNameLookup;
}

export default function getClass(className) {
  return classNameLookup(className);
}
