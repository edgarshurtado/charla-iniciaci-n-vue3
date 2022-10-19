export default function dates() {
  function daysUntilEvent(date: Date) {
    const differenceInMilliseconds = date.getTime() - new Date().getTime();
    const differenceInDays = Math.ceil(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    return differenceInDays;
  }
  return {
    isFutureDate(date: Date) {
      return daysUntilEvent(date) > 0;
    },
    daysUntilEvent,
    humanizeDays(numberOfDays: number) {
      return numberOfDays > 0 ? `${numberOfDays} días` : `Pasado`;
    },
  };
}
