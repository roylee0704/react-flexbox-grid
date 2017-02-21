import styles from 'flexboxgrid';

export default function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}
