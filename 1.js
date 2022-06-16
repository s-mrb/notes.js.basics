const points = [40, 100, 1, 5, 25, 10];

// ascending
points.sort(function(a, b){return a - b});

console.log(points)

// descending
points.sort(function(a, b){return b - a});

console.log(points)
