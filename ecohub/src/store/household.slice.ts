import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface HouseholdState {
  households: Household[];
}

// Define the initial state using that type
const initialState: HouseholdState = {
  households: [],
};

export const householdSlice = createSlice({
  name: 'household',
  initialState,
  reducers: {
    addHousehold: (state, { payload }: PayloadAction<Household>) => {
      state.households.push(payload);
    },
    removeHousehold: (state, { payload }: PayloadAction<number>) => {
      state.households = state.households.filter(
        (household) => household.id !== payload,
      );
    },
    addAppliance: (state, { payload }: PayloadAction<{ appliance:Appliance, householdId: number }>) => {
      state.households = state.households.map((household) => {
        if (household.id === payload.householdId) {
          household.appliances.push(payload.appliance);
        }
        return household;
      });
    },
    removeAppliance: (state, { payload }: PayloadAction<{ applianceId: number, householdId: number }>) => {
      state.households = state.households.map((household) => {
        if (household.id === payload.householdId) {
          household.appliances = household.appliances.filter(
            (appliance) => appliance.id !== payload.applianceId,
          );
        }
        return household;
      });
    },
  },
});

export const { addAppliance, addHousehold, removeAppliance, removeHousehold } = householdSlice.actions;
export default householdSlice.reducer;