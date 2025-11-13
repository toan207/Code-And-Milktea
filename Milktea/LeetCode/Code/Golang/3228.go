package main

func maxOperations(s string) int {
	point := 0
	res := 0
	f := 1

	for i := 0; i < len(s); i++ {
		if s[i] == '1' {
			point += 1
			f = 1
		} else {
			res += point * f
			f = 0
		}
	}

	return res
}
