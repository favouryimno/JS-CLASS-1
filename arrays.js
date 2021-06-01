const array = [1, 2.3, 'hello', true]
array.push(100)
array.pop()
const newarray = array.slice(1)

console.log(newarray)

const numbers = [10, 20, 30, 40, 50]
function add() {}
const chnagednumbers = numbers.map(function (item){return item/2})

console.log(chnagednumbers)

const ages = [25, 30, 45, 60, 75]

const newages = ages.map((age, index) => {
    if(index ==  1){
        return age/2
    }else {
        return age
    }
})

const totalages = ages.reduce((prev, next) => {
    console.log(prev, next)
    return prev + next
})
console.log(newages)
console.log(totalages)

const multipleages = ages.map(function(item){return item*2} )

console.log(multipleages)

const freshages = multipleages.reduce((prev,next) => {
    console.log(prev, next)
    return prev + next
})
console.log(freshages)




