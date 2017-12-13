export const IS_FETCHING = 'IS_FETCHING';

const load = (url, nameSpace) => {
    const homeUrl = 'http://www.omdbapi.com/';
    const apiKey = 'apikey=1bfe9dd8';

    return(
        (dispatch) => {
            dispatch({type: IS_FETCHING, value: true});

            fetch(`${homeUrl}?${url}&${apiKey}`)
                .then( response =>{
                    return response.json();
                })
                .then( r => {
                    if (r.Response === 'False') {
                        dispatch({type: IS_FETCHING, value: false});
                        dispatch({type: 'HAS_ERROR', result: r});
                    } else {
                        dispatch({type: IS_FETCHING, value: false});
                        dispatch({type: 'HAS_ERROR', result: false});
                        dispatch({type: `${nameSpace}_LOADED`, result: r});
                    }
                })
                .catch( error => {
                    dispatch({type: 'HAS_ERROR', result: error});
                    dispatch({type: IS_FETCHING, value: false});
            })
        }
    );
};

export default load;
