export default function(a, b) {
  function reduceToString(arg) {
    if (Array.isArray(arg)) {
      return arg.join(' ');
    }
    return arg || '';
  }

  const stringA = reduceToString(a);
  const stringB = reduceToString(b);

  if (stringA.length > 0 && stringB.length > 0) {
    return stringA + ' ' + stringB;
  }

  return stringA || stringB;
}
