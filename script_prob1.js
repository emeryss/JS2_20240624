let cup_a = 1
let cup_b = 2 
console.log(cup_a,cup_b) // 1,2 
let cup_c = cup_a
cup_a = cup_b
cup_b = cup_c 
console.log(cup_a,cup_b) //  2,1 