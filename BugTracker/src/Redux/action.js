import { UPLOAD_LOG } from "./actionType";

export const uploadLog = (log) => ({
    type: UPLOAD_LOG,
    payload: log,
});