export const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    products: [],
    error: null,
};

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case "init_stored": {
            return action.value;
        }
        case "set_loading": {
            return {
                ...state,
                isLoading: action.value,
            };
        }
        case "set_logged_in": {
            return {
                ...state,
                isLoggedIn: action.value,
            };
        }
        case "set_log_out": {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                user: {},
                products: [],
                cart: [],
                orders: [],
                error: null,
            }
        }

        case "set_user": {
            return {
                ...state,
                user: action.value,
            };
        }
        case "set_products": {
            return {
                ...state,
                products: action.value,
            };
        }
        case "set_error": {
            return {
                ...state,
                error: action.value,
            };
        }
        default: {
            return state;
        }
    }
};
