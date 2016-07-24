export default function createProps(propTypes, props, className) {
  const newProps = {};

  Object.keys(props)
    .filter(key => (key === 'children' || !propTypes[key]))
    .forEach(key => (newProps[key] = props[key]));

  return Object.assign({}, newProps, { className });
}
