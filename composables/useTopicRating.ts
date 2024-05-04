import type { IDataRating } from "@/types";

export const useTopicRating = (topic: any, _default = 1) => {
  const {
    key: { TOPIC_RATINGS, RATING_LOCAL },
  } = useAppConfig();
  const topic$ = ref();
  watchEffect(() => {
    topic$.value = toValue(topic);
  });

  // local cache; user key, values of topics rated
  const rid$ = useLocalStorage(RATING_LOCAL, () => ({
    key: idGen(),
    val: { [topic$.value]: _default },
  }));
  // cache rated value
  const val_ = computed(() => get(rid$.value, `val.${topic$.value}`));
  // ratings cache by topic
  const { data, put } = useDoc<IDataRating>(TOPIC_RATINGS);
  const store = computed(() => get(data.value, "data"));
  // topic ratings cache
  const d = computed(() => get(data.value, `data.${topic$.value}`));
  const ratingsCount = computed(() =>
    reduce(d.value, (res, val) => (res += !(0 < val) ? 0 : 1), 0)
  );
  const rating = computed(
    () =>
      ratingsCount.value &&
      Math.round(
        reduce(d.value, (res, val) => (res += 0 < val ? val : 0), 0) /
          ratingsCount.value
      )
  );

  const rate = async (r: any) => {
    if (!(0 <= r)) return;
    try {
      await put({ [`${topic$.value}.${rid$.value.key}`]: r });
      set(rid$.value, `val.${topic$.value}`, r);
    } catch (error) {
      // pass
    }
  };

  const clear = async () => {
    try {
      await put({ [`${topic$.value}.${rid$.value.key}`]: 0 });
      set(rid$.value, `val.${topic$.value}`, 0);
    } catch (error) {
      // pass
    }
  };

  return {
    // # crud
    ratingsCount,
    rating,
    rate,
    clear,

    // all
    store,

    // cache rated value
    val: val_,
  };
};
