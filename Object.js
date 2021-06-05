var student = {
    fname: "favour",
    lname: "dedan",
    age: 20,
    address: "jos",
    weight: 4.5,
    fullname: function() {
        return this.fname +" " + this.lname
    }
    }

    console.log(student.fullname())
    console.log(student.address)

    var student2 ={
        name: {
            Fname: "Valour",
            Lname: "Dedan",
        },
        address: {
            no: 10,
            street: "Iboko",
            city: "Abuja",
            state: "FCT",

        },
        age: 18,
    }

    console.log(student2.name.Fname + " " + student2.name.Lname)
    // to edit an item in the class e.g the street
    student2.address.street = "wealth"

    console.log(student2.address)

    var record = [
        {
            id: 2,
            name: "Ideal",
            age: 14,
        },
        {
            id: 4,
            name: "Emeka",
            age: 17,
        }
    ]

    console.log(record.filter((value)=> value.id == 2))

    //or with a for loop..
    for (let d of record) {
        console.log(d.name)
    }


    



