import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ApplianceState {
  appliances: Appliance[];
}

// Define the initial state using that type
const initialState: ApplianceState = {
  appliances: [],
};

export const applianceSlice = createSlice({
  name: 'appliance',
  initialState,
  reducers: {
    addAppliance: (state, { payload }: PayloadAction<Appliance>) => {
      state.appliances.push(payload);
    },
    removeAppliance: (state, { payload }: PayloadAction<string>) => {
      state.appliances = state.appliances.filter(
        (appliance) => appliance.id !== payload,
      );
    },
  },
});

export const { addAppliance, removeAppliance } = applianceSlice.actions;
export default applianceSlice.reducer;