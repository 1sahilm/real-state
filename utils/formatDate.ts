// utils/formatDate.ts
export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); // Example: 'Jun'
  const year = date.getFullYear().toString().slice(-2); // Example: '21'

  // Add ordinal suffix
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';

  return `${day}${suffix} ${month} '${year}`;
};


// utils/getCurrentTime.ts
export const getCurrentTimeInIST = (): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: true, // Use 12-hour format
    timeZone: 'Asia/Kolkata', // IST timezone
  };

  return new Intl.DateTimeFormat('en-IN', options).format(new Date());
};
