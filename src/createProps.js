export default function createProps(propTypes, props, classNames) {
  const newProps = {};

  Object.keys(props)
    .filter(key => (key === 'children' || !propTypes[key]))
    .forEach(key => (newProps[key] = props[key]));

  const className = classNames.filter(cn => cn).join(' ');
  return Object.assign({}, newProps, { className });
}
