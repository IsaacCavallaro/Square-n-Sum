# Link to codewars kata

[https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript](https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript)

- This is a breakdown of my solution to the above code kata.
- After completing the kata, I implemented some basic testing using jest.

# Square(n) Sum

- Complete the square sum function so that it squares each number passed into it and then sums the results together.
- For example, for `[1, 2, 2]` it should return `9` because `1^2 + 2^2 + 2^2 = 9`.

---

# My solution:

```jsx
function squareSum(numbers){
  var total= 0;
  var arr = numbers.map(function(item) {return item * item;});
    for(var i in arr) { 
      total += arr[i]; 
    };
  return total;
}
```

---

## Break down code:

- Declare count variable and set to 0

```jsx
var total= 0;
```

- Create new array with `.map`

```jsx
numbers.map
```

- Return each item/element the total of multiplying itself with itself.

```jsx
{return item * item;}
```

- Store in new variable

```jsx
var arr = numbers.map(function(item) {return item * item;});
```

- Iterate over array with `for` loop

```jsx
for(var i in arr)
```

- Add each element/i in array to the total

```jsx
total += arr[i];
```

- return total

```jsx
return total;
```