import * as api from "../api/subscribeAPI"

export const createSubscription = (email: any) => async (dispatch: any) => {
    try {
        const { data } = await api.createSubscription(email);

        return data

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log('Unexpected error', error);
        }
    }
};
