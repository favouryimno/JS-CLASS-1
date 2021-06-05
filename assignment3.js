var students = [
    {
        id: 1,
        Fname: "Favour",
        Lname: "Dedan",
        age: 22,
        address: "Ringroad",
        number: 08018255858,
    },
    {
        id: 2,
        Fname: "David",
        Lname: "Mbaya",
        age: 34,
        address: "Federal Locust",
        number: 08071628007,
    },
    {
        id: 3,
        Fname: "Liman",
        Lname: "Ahmad",
        age: 26,
        address: "Dadin Kowa",
        number: 08073148092,
    },
    {
        id: 4,
        Fname: "Usman",
        Lname: "Abdulhadi",
        age: 20,
        address: "Lamingo",
        number: 09037005722,
    },
    {
        id: 5,
        Fname: "Abdul",
        Lname: "Garuba",
        age: 30,
        address: "Terminus",
        number: 08186041859,
    },
    {
        id: 6,
        Fname: "Auwal",
        Lname: "Yobe",
        age: 21,
        address: "Hilstation",
        number: 09062608922,
    },
    {
        id: 7,
        Fname: "Ibrahim",
        Lname: "Weng",
        age: 28,
        address: "Bukuru",
        number: 09134981941,
    },
    {
        id: 8,
        Fname: "Chindo",
        Lname: "Abdulahi",
        age: 23,
        address: "State Locust",
        number: 08136021314,
    },
    {
        id: 9,
        Fname: "Kunle",
        Lname: "ASwosegbe",
        age: 29,
        address: "Tudun Wada",
        number: 0812105572852,
    },
    {
        id: 10,
        Fname: "Sadiq",
        Lname: "Abdulazeez",
        age: 31,
        address: "Rayfield",
        number: 09152976390,
    },
    {
        id: 11,
        Fname: "Andarani",
        Lname: "Manasseh",
        age: 24,
        address: "Rukuba Road",
        number: 09017265959,
    },
    {
        id: 12,
        Fname: "Dorathy",
        Lname: "Linus",
        age: 29,
        address: "Sukwa",
        number: 08033248911,
    },
    {
        id: 13,
        Fname: "Olufemi",
        Lname: "Michael",
        age: 34,
        address: "Odus",
        number: 08158972340,
    }

]

for (let f of students) {
    console.log(f.Fname)
}

const max = students.reduce((prev, current) => (prev.age > current.age) ? prev : current)
console.log(max)

const average = students.reduce((total, next) => total + next.age, 0) / students.length;
console.log(average)

