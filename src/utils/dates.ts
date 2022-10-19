export default function dates() {
  return {
    isFutureDate(date: Date) {
      return this.daysUntilEvent(date) > 0;
    },
    daysUntilEvent(date: Date) {
      const differenceInMilliseconds = date.getTime() - new Date().getTime();
      const differenceInDays = Math.ceil(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
      );
      return differenceInDays;
    },
    humanizeDays(numberOfDays: number) {
      return numberOfDays > 0 ? `${numberOfDays} días` : `Pasado`;
    },
  };
}
