const intersectionSizeTwo = (intervals) => {
    intervals.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });

    let setSize = 0;
    let small = -1;
    let big = -1;

    for (let i = 0; i < intervals.length; i++) {
        const [l, r] = intervals[i];
        if (l > big) {
            small = r - 1;
            big = r;
            setSize += 2;
        } else if (l > small) {
            small = big;
            big = r;
            setSize += 1;
        }
    }

    return setSize;
}   