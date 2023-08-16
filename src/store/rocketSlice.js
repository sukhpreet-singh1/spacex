import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  searchData: [],
  filterAttributes: [],
  attributesToMatch: ['type', 'status'],
  searchEnabled: false,
}

const rocketSlice = createSlice({
  name: 'loadData',
  initialState,
  reducers: {
    dataLoad: (state, action) => {
      state.data = action.payload
    },
    filterCapsules: (state, action) => {
      state.filterAttributes = action.payload
      const matchingObjects = state.data.filter((obj) => {
        return state.attributesToMatch.every((attr) => {
          const attrValue = obj[attr]
          const matchingValue =
            state.filterAttributes[state.attributesToMatch.indexOf(attr)]
          return attrValue === matchingValue
        })
      })
      state.data = matchingObjects
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
  rocketSlice.actions
export default rocketSlice.reducer
