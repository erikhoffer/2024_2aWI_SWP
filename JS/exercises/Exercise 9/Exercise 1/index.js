let input = 36;

for (i = 1; i <= 122; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
        console.log('FooBar');
    } else if (i % 5 == 0) {
        console.log('Foo');
    } else if (i % 7 == 0) {
        console.log('Bar');
    } else {
        console.log(i);
    }
}