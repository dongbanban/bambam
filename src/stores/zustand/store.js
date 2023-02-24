/*
 * @FilePath: /click/Users/i104/vite3/src/stores/zustand/store.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { create } from 'zustand'

const useDemoStore = create((set, get) => ({
    value1: 'value1',
    value2: "value2",
    setValue: (key, newValue) => set({ [key]: newValue }),
    getState: () => get(),
    reset: () => set({
        value1: 'value1',
        value2: "value2"
    })
}))

export default useDemoStore