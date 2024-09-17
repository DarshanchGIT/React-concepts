import { atom, selector } from "recoil";
export const counterAtom = atom({
  default: 1,
  key: "counterAtom",
});

//selectors
export const countSelector = selector({
  key: "countSelector",
  get: ({ get }) => {
    const darshan = get(counterAtom);
    return darshan % 2 == 0;
  },
});
