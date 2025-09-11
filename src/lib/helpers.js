// All the helper functions should must be there.
// The functions that you're using multiple times must be there.
// e.g. formatDateToMMDDYYYY, formatEpochToMMDDYYYY, etc.
import moment from "moment";

export const dateFormate = (date) => {
    if (!date) {
      return "--"; 
    }
  
    const formatted = moment(date);
    return formatted.isValid() ? formatted.format("YYYY-MM-DD") : "Invalid Date";
  };
    
