
export function getData() {
  const currentDate = new Date();
  const dt =`${ currentDate.toLocaleString().slice(0, 10) + currentDate.toLocaleString().slice(11, -3)}`;

  return dt
}