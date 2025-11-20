func intersectionSizeTwo(intervals [][]int) int {
    sort.Slice(intervals, func(i, j int) bool {
        if intervals[i][1] == intervals[j][1] {
            return intervals[i][0] > intervals[j][0]
        }
        return intervals[i][1] < intervals[j][1]
    })

    setSize := 0
    small, big := -1, -1

    for _, interval := range intervals {
        l, r := interval[0], interval[1]
        if l > big {
            small = r - 1
            big = r
            setSize += 2
        } else if l > small {
            small = big
            big = r
            setSize += 1
        }
    }

    return setSize
}	