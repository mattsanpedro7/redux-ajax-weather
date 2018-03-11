import { FETCH_WEATHER } from "../actions";

// data structure for state that is a list
// initial state of an array
export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
  case FETCH_WEATHER:
    // do not mutate state like using push
    // return state.concat([ action.payload.data ]);
    return [ action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city]]
  }

  return state;
}