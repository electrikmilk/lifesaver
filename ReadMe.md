# 🛟 Lifesaver

Deterministic lifesavers for common JavaScript errors, mistakes, and undefined behavior. It also includes helper
functions for missing features prevalent in other languages.

These helper functions are based on experiences I've had with the many quirks of JavaScript. This project is meant to
create helper functions that help you avoid these quirks that cause errors and unexpected behavior.

## Usage

### Empty value check

Check if a value is completely and totally empty. Ensures it is actually empty and not `0` or `false`.

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

### Error handling

```javascript
const [result, error] = TRY(callFunction());
if (error) {
    // handle error
    throw new Error();
}

// use result
console.log(result);
```

### Sleep

Implements JavaScript version of sleep.

```javascript
await sleep(5); // waits for 5 seconds.
```

### Local Storage

Local storage helper functions that keep the type of the value intact.

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

forget('key'); // delete key-value pair
```

### Strings

Strip HTML tags from a string.

```javascript
stripTags('<p>foo</p>'); // returns foo
```

Pluralize word based on an integer value. This will account for irregular plural nouns in English.

If the integer value given is not `1`, then the plural version of the word will be returned. Otherwise, the word given
will be returned.

```javascript
status.innerText = count + ' search ' + pluralize('result', count);
```

Title case a string.

```javascript
titleCase('change case of sentence to Title Case');
````

Trim prefixes and suffixes.

```javascript
trimPrefix('foobar', 'foo')
trimSuffix('foobar', 'bar')
````

### Arrays & Objects

```javascript
end(value); // Returns last item without modifying the underlying array.

pluck(value, 'key'); // Returns an array of values with provided 'key' from `value`.
```

### Random Numbers

Generate a random number with min and max.

```javascript
randomInt(0, 5);
randomInt(10, 20);
```

### Temp Elements

Sometimes you need to create elements temporarily. This function creates an element (by default a div), hides it using
CSS, and mounts it to the HTML body. This element is
then passed to the callback function you provide. When your function returns, the element is removed.

```javascript
// Creates element, mounts to the body hidden.
// Passes it to callback.
tempElement(element => {
    element.innerText = 'Hello, lifesaver!';
});
// Element is then removed automatically.

// By default, temp element is a <div>, but you can optionally pass a tagname.
tempElement(span => {
    span.innerText = 'Hello, lifesaver!';
}, 'span');
```
