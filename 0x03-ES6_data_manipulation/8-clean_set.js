export default function cleanSet(set, start) {
  if (start === '') return '';
  const output = [];
  for (const i of set) {
    if (i.startsWith(start)) {
      const sub = i.slice(start.length);
      output.push(sub);
    }
  }
  return output.join('-');
}
