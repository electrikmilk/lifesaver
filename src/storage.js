import {empty} from './main.js';

export function set(key, value) {
    if (empty(value)) {
        localStorage.setItem(key, null);
        return;
    }

    const preservedValue = JSON.stringify({value: value});
    localStorage.setItem(key, preservedValue);
}

export function get(key) {
    if (!localStorage.getItem(key)) {
        return false;
    }

    const item = JSON.parse(localStorage.getItem(key));
    return item.value;
}

export function forget(key) {
    if (!localStorage.getItem(key)) {
        return;
    }

    localStorage.removeItem(key);
}
