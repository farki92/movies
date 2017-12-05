export const testing = test => (
    (dispatch) => {
        dispatch({
            type: 'TEST',
            test,
        });
    }
);