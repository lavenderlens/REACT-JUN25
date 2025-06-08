Status `COMPLETE`. All materials uploaded post course.

Fix for case study:
    
    In /case-study/src/components/Basket.jsx
    
    the JSX return from the arrow function on line 13

```javascript
{products.map((product) => (
...)}
```
    was grouped with curly braces and should be round brackets, as above. 

    The curly brace in an arrow function demands that the return keyword be there, so instead the grouping operator must be used (round brackets).
