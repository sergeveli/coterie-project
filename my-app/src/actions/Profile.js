import api from "./api"

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formatData = data => ({
    ...data,
    age: parseInt(data.age ? data.age : 0)
})

export const fetchAll = () => dispatch =>{
    api.Profile().fetchAll()
    .then(response => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload:response.data
    })
        }
    )
    .catch(err=>console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.dCandidate().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}