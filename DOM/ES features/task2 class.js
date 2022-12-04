class bankCustomer{
    Customername = ""
    CustomerID  = ""
    Branchname = ""

    constructor(){
        this.Customername = "Dinesh"
        this.CustomerID = "1234"
        this.Branchname = "Guindy"
    }

    displayCustomername(Name)
    {
        this.Customername = Name
    }
    setCustomerID(ID)
    {
        this.CustomerID = ID
    }
    setBranchname(Branch)
    {
        this.Branchname = Branch
    }

    
    GetCustomername(Name)
    {
        return this.Customername
    }
    GetCustomerID(ID)
    {
        return this.CustomerID
    }
    GetBranchname(Branch)
    {
        return this.Branchname
    }

displayCustomerDetails(){
    console.log(`Customer name : ${this.Customername}`)
    console.log(`Customer id : ${this.CustomerID}`)
    console.log(`branch name : ${this.Branchname}`)
}
}

let Bankdetails = new bankCustomer()

Bankdetails.displayCustomername("abc")
// Bankdetails.setCustomerID("456")
// Bankdetails.setBranchname("chennai")
Bankdetails.displayCustomerDetails()

module.exports = bankCustomer()

