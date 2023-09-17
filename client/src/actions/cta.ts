import * as api from "../api/ctaAPI"

export const createCTA = (post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.createCTA(post);

        return data

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log('Unexpected error', error);
        }
    }
};
