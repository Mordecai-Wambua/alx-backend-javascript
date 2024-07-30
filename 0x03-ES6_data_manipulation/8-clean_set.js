export default function cleanSet(set, startString) {
  if (!startString) return '';

  const output = [];
  for (const i of set) {
    if (i.startsWith(startString)) {
      const sub = i.slice(startString.length);
      output.push(sub);
    }
  }
  return output.join('-');
}
