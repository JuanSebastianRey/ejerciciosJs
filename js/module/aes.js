export default function numeroDeAes(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a') {
      counter++;
    }
  }
  return counter;
}
