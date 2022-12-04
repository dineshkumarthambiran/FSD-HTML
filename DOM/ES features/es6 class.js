// class test{
// Name = "hello"
// Name = "world"
// day = 1
// dept = ''

// printclass()
// {
//     console.log(this.Name)
//     console.log(this.dept)
// }

// typedept(enter)
// {this.dept=enter}

// }

// let object1 = new test()
// object1.printclass()
// object1.typedept("csc")     
// object1.printclass()    
// // object1.typedept("csc")       

// constructor********************************************

class car(){
    "color" =""
    "model" = ""
    "wheel" = ""

    constructor ()
    {
        this.color = "red"
        this.model = 2021
        this.wheel = "alloy"
    }

setcolor (color)
{
    this.color = color
}


    getcolor ()
    {return this.color}

    getwheel()
    {
        return this.wheel
    }

    displaydetails()
    {
        console.log(this.color)
        console.log(this.wheel)
    }
}

let cars = new car()

cars.displaydetails()

