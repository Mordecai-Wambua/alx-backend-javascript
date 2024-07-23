export default function iterateThroughObject(reportWithIterator) {
  const text = [];
  for (const item of reportWithIterator) {
    text.push(item);
  }
  return text.join(' | ');
}
