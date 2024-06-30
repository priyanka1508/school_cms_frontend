const initialState = {
    eventListMapping: {
        "All": "all",
        "Plantation Day": "plantation_day_event",
        "Annual Day": "annual_day_event",
        "Sports Day": "sports_day_event",
        "NCC (National Cadet Corps)": "ncc_event",
        "Science Labs": "science_event",
        "Alumni Association": "alumni_event",
        "Cleanliness Drive": "cleanliness_event",
      }
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MAPPING':
            return {
                ...state,
                eventListMapping: {
                    ...state.eventListMapping,
                    ...action.payload
                },
            };
        default:
            return state;
    }
  };
  
  
  export default rootReducer;