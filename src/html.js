import {empty} from './main.js';

export function tempElement(callback, tagName = 'div') {
    const temp = document.createElement(tagName);

    temp.style.display = 'none';
    document.body.append(temp);

    callback(temp);
    temp.remove();
}

export function newElement(tagName, attributes = {}) {
    const element = document.createElement(tagName);

    if (!empty(attributes)) {
        for (const [key, value] of Object.entries(attributes)) {
            element[key] = value;
        }
    }

    return element;
}

export function newParentElement(descriptor, ...childNodes) {
    const matches = descriptor.match(descriptorRegex);
    if (!matches[1]) {
        throw new Error('renderElement(): Invalid descriptor! Please use format "tagname", "tagname.class" or "tagname#id".');
    }

    const tagName = matches[1];
    const element = document.createElement(tagName);

    if (matches[2]) {
        let classOrId = matches[2];
        let firstChar = classOrId[0];
        switch (firstChar) {
            case '.':
                classOrId = classOrId.replace('.', '');
                element.className = classOrId;
                break;
            case '#':
                classOrId = classOrId.replace('#', '');
                element.id = classOrId;
                break;
            default:
        }
    }

    if (childNodes) {
        element.append(...childNodes);
    }

    return element;
}

export function renderText(text) {
    return document.createTextNode(text);
}
