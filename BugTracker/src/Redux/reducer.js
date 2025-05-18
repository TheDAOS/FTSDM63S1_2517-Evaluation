const initialData = {
    log: [
        { "id": 1, "timestamp": 1710000034, "severity": "high", "message": "Unhandled promise", "devId": "DEV1001" },
        { "id": 2, "timestamp": 1710001050, "severity": "medium", "message": "Null pointer exception", "devId": "DEV1002" },
        { "id": 3, "timestamp": 1710002100, "severity": "low", "message": "Deprecated API usage", "devId": "DEV1003" },
        { "id": 4, "timestamp": 1710003150, "severity": "high", "message": "Memory leak detected", "devId": "DEV1004" },
        { "id": 5, "timestamp": 1710004200, "severity": "medium", "message": "Slow response time", "devId": "DEV1001" },
        { "id": 6, "timestamp": 1710005250, "severity": "low", "message": "Minor UI glitch", "devId": "DEV1002" }
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