// This is a placeholder file which shows how you can define functions which can be used from both a browser script and a node script. You can delete the contents of the file once you have understood how it works.

export function getDates(year, month, day, occurrence) {
  const saveDate = [];
  const occurrences = {
    first: 1,
    second: 2,
    third: 3,
    last: -1,
  };

  const days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  const targetDay = days[day.toLowerCase()];
  const targetOcc = occurrences[occurrence.toLowerCase()];
  const newDate = new Date(year, month - 1, 1);
  while (newDate.getMonth() === month - 1) {
    if (newDate.getDay() === targetDay) {
      saveDate.push(new Date(newDate));
    }
    newDate.setDate(newDate.getDate() + 1);
  }
  if (targetOcc === -1) {
    return saveDate[saveDate.length - 1];
  }
  return saveDate[targetOcc - 1];
}
