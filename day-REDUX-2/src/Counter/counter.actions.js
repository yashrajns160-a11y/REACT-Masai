
import { COUNTER_DEC, COUNTER_INC } from "./counter.types";

export const increment = (payload = 1) => ({ type: COUNTER_INC, payload });
export const decrement = (payload = 1) => ({ type: COUNTER_DEC, payload });