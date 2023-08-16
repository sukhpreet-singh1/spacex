import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  searchData: [],
  filterAttributes: [],
  attributesToMatch: ['type', 'status'],
  searchEnabled: false,
}

const capsulesSlice = createSlice({
  name: 'loadData',
  initialState,
  reducers: {
    dataLoad: (state, action) => {
      state.data = action.payload
    },
    filterCapsules: (state, action) => {
      state.filterAttributes = action.payload
      if (state.searchEnabled) {
        state.data = state.searchData
      }

      if (state.filterAttributes.length > 0) {
        state.data = state.data.filter((item) => {
          if (state.filterAttributes.includes(item.type)) {
            return item
          }
        })
      }
    },
    searchCapsules: (state, action) => {
      const filter = action.payload
      state.searchData = state.data.filter((item) =>
        item.capsule_serial.toLowerCase().includes(filter.toLowerCase())
      )
    },
    enableSearch: (state) => {
      state.searchEnabled = true
    },
    disableSearch: (state) => {
      state.searchEnabled = false
    },
  },
})

export const { dataLoad, filterCapsules, searchCapsules, enableSearch, disableSearch } =
  capsulesSlice.actions
export default capsulesSlice.reducer
