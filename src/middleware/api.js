const apiMiddleware = store => next => action => {  
    if (!action.meta || action.meta.type !== 'api') {
        return next(action);
    }
    const { url } = action.meta;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            let newAction = Object.assign({}, action, {
                payload: json.data
            });
            delete newAction.meta;
            store.dispatch(newAction);
        })
}

export default apiMiddleware;