export default function(keys, props) {
  const newProps = Object.assign({}, props);

  keys.forEach(key => delete newProps[key]);

  return newProps;
}
