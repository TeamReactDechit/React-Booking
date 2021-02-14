/**
 * 
 * @param {date} 
 * trasfromata la data UTC in formato aaaa-mm-dd hh:mm:ss
 */
export function formatDate(date) {
  const standardDate = new Date(0);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  standardDate.setUTCMilliseconds(date);
  return standardDate.toLocaleDateString("it-IT", options);
}
