# 🛟 Lifesaver

### Ahoy! ⚓️

Deterministic lifesavers for common JavaScript errors, mistakes, and undefined behavior. It also includes helper
functions for missing features prevalent in other languages that usually would help avoid these issues.

These helper functions are based on experiences I've had wit' the many quirks o' JavaScript. This project be meant to
create helper functions that help ye avoid these quirks that cause errors 'n unexpected behavior when you be lost at
sea.

# Usage

## General

### Empty value check

Checks if a value is empty. Ensures it is actually empty and not `0` or `false`.

```javascript
let value = 0;
empty(value); // false

value = false;
empty(value); // false

value = {};
empty(value); // true

value = undefined
empty(value); // true
```

### Sleep

Implements JavaScript version of sleep.

```javascript
await sleep(5); // waits for 5 seconds.
```

### Next Frame

Wait for the next frame for other things to happen during that frame before proceeding.

```javascript
await nextFrame();
```

## Error handling

### Try

```javascript
const [result, error] = TRY(function);
if (error) {
    // handle error
    throw new Error();
}

// use result
console.log(result);
```

## Local Storage

Local storage helper functions that preserve the type of the value.

### Set & Get

```javascript
set('key', {test: true});
const object = get('key'); // {test: true}
object.test; // true (not "true")

set('key', 5);
get('key'); // 5 (not "5")

set('key', true);
get('key'); // true (not "true")

set('key', "string");
get('key'); // "string"

set('key'); // clear the value of the key
get('key') // null
```

### Forget

```javascript
forget('key'); // delete key-value pair
```

## Strings

### Strip HTML

Strip HTML tags from a string.

```javascript
stripTags('<p>foo</p>'); // returns foo
```

### Pluralize

Pluralize word based on an integer value. This will account for irregular plural nouns in English.

If the integer value given is not `1`, then the plural version of the word will be returned. Otherwise, the word given
will be returned.

```javascript
status.innerText = count + ' search ' + pluralize('result', count);
```

### Title Case

```javascript
titleCase('change case of sentence to Title Case');
````

### Trim prefixes and suffixes

```javascript
trimPrefix('foobar', 'foo')
trimSuffix('foobar', 'bar')
````

## Arrays & Objects

### End

```javascript
end(value); // Returns last item without modifying the underlying array.
```

### Pluck

```javascript
pluck(value, 'key'); // Returns an array of values with provided 'key' from `value`.
```

## Random Numbers

Generate a random number with min and max.

```javascript
randomInt(0, 5);
randomInt(10, 20);
```

## HTML DOM Elements

### Temporary Element

Sometimes you need to create elements temporarily. This function creates an element (by default a div), hides it using
CSS, and mounts it to the HTML body. This element is
then passed to the callback function you provide. When your function returns, the element is removed.

```javascript
// Creates element, mounts to the body hidden.
// Passes it to the callback.
tempElement(element => {
    element.innerText = 'Hello, lifesaver!';
});
// Element is then removed automatically.

// By default, temp element is a <div>, but you can optionally pass a tagname.
tempElement(span => {
    span.innerText = 'Hello, lifesaver!';
}, 'span');
```

### Create Element

This is a helper for creating elements using a much cleaner API. These elements are **not** mounted to the document body
automatically.

Provide a tag and an object of attributes to apply after initially creating the element, then return the element.

```javascript
const myElement = newElement('div', {
    className: "test"
});
```

### Create Parent Element

This is for rendering HTML using a tree of functions. Takes any elements after the tag name as children.

```javascript
newParentElement('div',
        newElement('div', {id: 'id'}),
        newElement('div', {className: 'class'}),
);
```

### Create Text Node

This is also for rendering HTML using a tree of functions. This will return a text node.

```javascript
newParentElement('div',
        renderText("Hello, world!"),
);
```
