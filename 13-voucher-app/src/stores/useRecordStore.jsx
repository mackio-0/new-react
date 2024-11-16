import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  setRecords: (records) => set({ records }),
  addRecord: (record) =>
    set((state) => ({ records: [...state.records, record] })),
  deleteRecord: (recordId) => {
    set((state) => ({
      records: state.records.filter((record) => record.id != recordId),
    }));
  },
  increaseQuantity: (recordId) => {
    set((state) => ({
      records: state.records.map((record) =>
        record.id === recordId
          ? { ...record, quantity: record.quantity + 1 }
          : record
      ),
    }));
  },
  decreaseQuantity: (recordId) => {
    set((state) => ({
      records: state.records.map((record) =>
        record.quantity != 0 && record.id === recordId
          ? { ...record, quantity: record.quantity - 1 }
          : record
      ),
    }));
  },
}));

export default useRecordStore;

// {product_name: "Product 1", price: 10, quantity: 5, created_at: "2023-01-01T00:00:00.000Z"}

// deleteRecord: (recordId) =>
//   set((state) => ({
//     records: state.records.filter((record) => record.id !== recordId),
//   })),
// updateRecord: (recordId, updatedRecord) =>
//   set((state) => ({
//     records: state.records.map((record) =>
//       record.id === recordId ? updatedRecord : record
//     ),
//   })),
