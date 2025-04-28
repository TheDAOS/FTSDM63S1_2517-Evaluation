const initialData = {
    log: [
        { "id": 1, "timestamp": 1710000034, "severity": "high", "message": "Unhandled promise", "devId": "DEV1001" },
    ],
}

function bugLogReducer(state = initialData, action) {
    switch (action.type) {
        case 'UPLOAD_LOG':
            return {
                ...state,
                log: [...state.log, action.payload]
            }
        
        default:
            return state;
    }
}

export default bugLogReducer;