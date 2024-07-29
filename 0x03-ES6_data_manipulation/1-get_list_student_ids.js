export default function getListStudentIds(source) {
  if (!Array.isArray(source)) return [];
  return (source.map((item) => item.id));
}
