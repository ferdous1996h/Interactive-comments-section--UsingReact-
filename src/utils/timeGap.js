function timeGap(oldTime) {
  const oldTimeCalc = new Date(oldTime);
  const newTime = new Date();
  const mins = Math.floor((newTime - oldTimeCalc) / 60000);
  const hours = Math.floor((newTime - oldTimeCalc) / (60000 * 60));
  const days = Math.floor((newTime - oldTimeCalc) / (60000 * 60 * 24));
  if (mins < 1) return `Just now`;
  if (mins < 60) return `${mins} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  return `${days} days ago`;
}
export default timeGap;
