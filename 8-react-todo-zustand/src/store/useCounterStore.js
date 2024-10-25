import { create } from "zustand";

// const useCounterStore = create(function (set) {
//   return {
//     count: 3,
//     resetCount: function () {
//       return set({ count: 0 });
//     },
//     increaseCount: function (amount = 1) {
//       return set(function (state) {
//         return { count: state.count + amount };
//       });
//     },
//     decreaseCount: function (amount = 1) {
//       return set(function (state) {
//         return {
//           count: state.count - amount,
//         };
//       });
//     },
//   };
// });

// ES6 standard

const useCounterStore = create((set) => ({
  count: 3,
  resetCount: () => set({ count: 0 }),
  increaseCount: (amount) => set((state) => ({count: state.count + amount})),
  decreaseCount: () => set((state) => ({count: state.count - 1}))
}));

export default useCounterStore;
