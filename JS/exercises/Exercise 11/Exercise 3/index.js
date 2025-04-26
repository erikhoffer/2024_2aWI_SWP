let zahlen = [5, 1, -2, -8, 4, 5]

for (let i = 0; i < zahlen.length; i++) {
    if (zahlen[i] < zahlen[1] && zahlen[i] > zahlen[-1])
        console.log(zahlen[3])
}