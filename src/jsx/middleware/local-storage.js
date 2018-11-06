const localStorageMiddleware = store => next => action => {
    if (!action.meta || action.meta.type !== 'storage') {
        return next(action);
    }
    const { key } = action.meta, 
        data = JSON.parse(localStorage.getItem(key)) || [];

    if (action.meta.method === 'set') {
        const index = data.indexOf(action.payload.id);
        if (index !== -1) {
            data.splice(index, 1);
        } else {
            data.push(action.payload.id);
        }
        localStorage.setItem(key, JSON.stringify(data));
    }
    const newAction = Object.assign({}, action, {
        payload: data
    });
    delete newAction.meta;
    store.dispatch(newAction);
}

export default localStorageMiddleware;