import { COUNTER_DEC, COUNTER_INC } from "./counter.types"

const initialState = {
    count : 0,
}

const counterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case COUNTER_DEC: {
            return {
                ...state,
                count : state.count - payload,
            };
        }
        case COUNTER_INC: {
            return {
                ...state,
                count : state.count + payload,
            };
        }
        default : {
            return state;
        }
    }
};
export default counterReducer;