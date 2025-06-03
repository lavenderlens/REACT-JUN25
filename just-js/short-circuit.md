## Short-circuit operators in JS for React

### `||` operator

If both sides for an `||` expression evaluate to booleans the result is true if one or more sides are true. Nothing odd there.

If one or both sides are OBJECTS/NON-BOOLEAN VALUES, then the `||` expression evaluates to an object or non-boolean value, not a boolean.

If first side is truthy, it becomes the result, otherwise second side becomes the result. Regardless of whether second side is truthy or falsey!

### `&&` operator

If both sides for an `&&` expression evaluate to booleans the result is true only if both sides are true. Nothing odd there.

If one or both sides are OBJECTS/NON-BOOLEAN VALUES, then the `&&` expression evaluates to an object or non-boolean value, not a boolean.

If first side is truthy, the second side becomes the result, regardless of whether it is truthy or falsey, otherwise first side becomes the result.

###

    in the following code "x" is truthy and both "" and 0 are falsey

```javascript
> "x" || ""
'x'
> "" || 0
0
> "x" && ""
''
> "" && 0
''
>
```

At first less readable than an IF- ELSE- IF we can leverage the behaviour of the short-circuit operators in many handy ways eg. passing in default values:

Note prompt is window method and not used in React

```javascript
var name = prompt("Enter your name: ") || "friend";
console.log(`Hello ${name}`);
```

If nothing is entered at the prompt, the left hand side is falsey. So JS evaluates the RHS, which gets assigned to the variable.

If a name is entered, the LHS is truthy so it gets evaluated and assigned to the variable.
