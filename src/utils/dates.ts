export default function dates() {
  return {
    isFutureDate(date: Date) {
      return date.getTime() > new Date().getTime();
    },
  };
}
