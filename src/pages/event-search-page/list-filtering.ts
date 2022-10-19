import dates from "@/utils/dates";
import { computed, ref } from "vue";

type ProgrammigEvent = {
  name: string;
  startDate: Date;
  imgUrl: string;
};

export function eventListFiltering(eventsList: ProgrammigEvent[]) {
  const inputSearch = ref("");
  const onlyFutureEvents = ref(false);

  function searchInputHandler(event: Event) {
    inputSearch.value = (event.target as HTMLInputElement).value;
  }

  const { isFutureDate } = dates();

  const filteredEvents = computed(() => {
    let result = eventsList;

    if (onlyFutureEvents.value) {
      result = result.filter((ev) => isFutureDate(ev.startDate));
    }

    const searchValue = inputSearch.value.toLowerCase();
    if (!searchValue) {
      return result;
    }

    return result.filter((ev) => ev.name.toLowerCase().includes(searchValue));
  });

  return {
    filteredEvents,
    onlyFutureEvents,
    inputSearch,
    searchInputHandler,
  };
}
