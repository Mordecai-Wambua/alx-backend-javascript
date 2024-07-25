import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const x = [19, 20, 34];
  const y = [];

  for (const e of x) {
    const t = new ClassRoom(e);
    y.push(t);
  }
  return y;
}
