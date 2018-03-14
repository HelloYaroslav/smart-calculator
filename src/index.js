class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.initialValue = initialValue;
        this.task = String(this.initialValue) + "";
        this.result = 0;


    }

    add(number) {
        this.task = this.task + " + " + String(number);
        this.result = eval(this.task);

        return this;
    }

    subtract(number) {
        this.task = this.task + " - " + String(number);
        this.result = eval(this.task);
        return this;


    }

    multiply(number) {
        this.task = this.task + " * " + String(number);
        this.result = eval(this.task);


        return this;
    }

    devide(number) {
        this.task = this.task + " / " + String(number);
        this.result = eval(this.task);
        return this;


    }




    pow(number) {
        this.task = this.task + " ** " + String(number);
        this.result = eval(this.task);
        return this;

    }
}
SmartCalculator.prototype.valueOf = function() { return this.result };


//const calculator = new SmartCalculator(2);

//const value = calculator.add(4).devide(2).add(4).devide(4).add(6).devide(3);

//console.log(value.result);


module.exports = SmartCalculator;