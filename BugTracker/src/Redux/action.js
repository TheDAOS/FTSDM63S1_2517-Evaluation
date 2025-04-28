import { UPLOAD_LOG } from "./actionType";

export const upload_log = (log) => ({
    type: UPLOAD_LOG,
    payload: log.json(),
});