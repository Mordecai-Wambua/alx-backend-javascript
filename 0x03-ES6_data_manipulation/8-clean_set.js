export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) return '';

  const output = [];
  for (const i of set) {
    if (typeof i === "string" && i.startsWith(startString)) {
      const sub = i.slice(startString.length);
      output.push(sub);
    }
  }
  return output.join('-');
}
