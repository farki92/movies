export const IS_FETCHING = 'IS_FETCHING';

const load = (url, nameSpace) => {
    console.log('Url : ' , url);
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
                    console.log('Farki : ' , r);
                    dispatch({type: IS_FETCHING, value: false});
                    dispatch({type: `${nameSpace}_LOADED`, value: r.Search});
                })
                .catch( error =>{
                    dispatch({type: IS_FETCHING, value: false});
                    console.log('Farki : ' , error)
            })
        }
    );
};

export default load;
