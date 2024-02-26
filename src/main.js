export * from './objects.js';
export * from './strings.js';
export * from './storage.js';
export * from './errors.js';

export async function sleep(s) {
    return await new Promise(resolve => setTimeout(resolve, s * 1000));
}

export function empty(value) {
    if (value === undefined || typeof value === 'undefined' || value === null) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    if (typeof value === 'object') {
        return Object.is(value, {});
    }

    return (!value && value !== 0 && value !== false);
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function tempElement(callback, tagName = 'div') {
    const temp = document.createElement(tagName);

    temp.style.display = 'none';
    document.body.append(temp);

    callback(temp);
    temp.remove();
}
