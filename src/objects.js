export function end(obj) {
    return structuredClone(obj).pop();
}

export function pluck(obj, key) {
    return obj.map(o => o[key]);
}
