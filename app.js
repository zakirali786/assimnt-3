// Question 1
class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    get totalIncome() {
        return this.incomes.reduce((myPrevVal, myCurrentVal)=> myPrevVal + myCurrentVal.amount,0)
    }
   get totalExpense() {
        return this.expenses.reduce((myPrevVal, myCurrentVal)=> myPrevVal + myCurrentVal.amount,0)
    }
    addIncome(amount, description) {
        this.incomes.push({
            amount,
            description,
        })
    }
    get accountBalance() {
        return this.totalIncome - this.totalExpense
    }
    addExpense(amount, description) {
        this.expenses.push({
            amount,
            description
        })
    }
}

const myAccount = new PersonAccount("Zakir", "Ali", [],[]);
myAccount.addExpense(22000, "Coffee");
myAccount.addIncome(200000, "Business");
console.log(myAccount.totalIncome);
console.log(myAccount.totalExpense);
console.log(myAccount.accountBalance);
console.log(myAccount)

// Question 2
class Automobile{
constructor(car,truck,bus){
this.car = car
this.truck = truck
this.bus = bus

}
start(){
    console.log("car is ready to drive")

}
door(){
console.log("doors are open")
}
}
// Question 3
class Car extends Automobile{
    constructor(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed){
super(car,truck,bus)
this.carname=carname
this.carmodel=carmodel
this.cardoor=cardoor
this.carmaxspeed=carmaxspeed
this.carminispeed=carminispeed
    }
}
class Truck extends Car{
    constructor(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed,truckname,truckmodel,truckdoor,truckmaxspeed,truckminispeed){
        super(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed)
this.truckname=truckname
this.truckmodel=truckmodel
this.truckdoor=truckdoor
this.truckmaxspeed=truckmaxspeed
this.truckminispeed=truckminispeed
    }
}
class Bus extends Truck{
    constructor(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed,truckname,truckmodel,truckdoor,truckmaxspeed,truckminispeed,busname,busmodel,busdoor,busmaxspeed,busminispeed){
        super(car,truck,bus,carname,carmodel,cardoor,carmaxspeed,carminispeed,truckname,truckmodel,truckdoor,truckmaxspeed,truckminispeed)
this.busname=busname
this.busmodel=busmodel
this.busdoor=busdoor
this.busmaxspeed=busmaxspeed
this.busminispeed=busminispeed


    }


}
let detail = new Bus("farari","truck","bus","mehran",2023,4,"320km","130km","dalda",2021,2,230,120,"mezan",2021,3,500,490)
console.log(detail)