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
    removeHousehold: (state, { payload }: PayloadAction<string>) => {
      state.households = state.households.filter(
        (household) => household.id !== payload,
      );
    },
    addAppliance: (state, { payload }: PayloadAction<{ applianceId:string, householdId: string }>) => {
      state.households = state.households.map((household) => {
        if (household.id === payload.householdId) {
          household.appliances.push(payload.applianceId);
        }
        return household;
      });
    },
    removeAppliance: (state, { payload }: PayloadAction<{ applianceId:string, householdId: string }>) => {
      state.households = state.households.map((household) => {
        if (household.id === payload.householdId) {
          household.appliances = household.appliances.filter(
            (applianceId) => applianceId !== payload.applianceId,
          );
        }
        return household;
      });
    },
  },
});

export const { addAppliance, addHousehold, removeAppliance, removeHousehold } = householdSlice.actions;
export default householdSlice.reducer;