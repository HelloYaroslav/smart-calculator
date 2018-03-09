class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.initialValue = initialValue;
        this.prevOperation = '';
        this.prevValue = 0;
        this.powVelue = [];
        this.mulValue = [];

    }

    add(number) {
        this.powVelue = [];
        this.mulValue = [];
        this.prevValue = number;
        this.prevOperation = "add";
        this.initialValue += number;


        return this;
    }

    subtract(number) {
        this.powVelue = [];
        this.mulValue = [];
        this.prevValue = number;
        this.prevOperation = "subtract";
        this.initialValue -= number;
        return this;
        // your implementation

    }

    multiply(number) {
        // your implementation

        function sum(mulValue) {
            let sum = 1;
            if (mulValue.length > 4)
                for (let i = 3; i < mulValue.length - 1; i++) {
                    sum *= mulValue[i + 1];
                    return sum;
                }
            else
                return mulValue[3];




        }
        if (this.prevOperation !== "multiply" && this.mulValue == []) {

            this.mulValue.push(this.initialValue);
            this.mulValue.push(this.prevValue);
            this.mulValue.push(this.prevOperation);
            this.mulValue.push(number);

        } else
        if (this.prevValue !== 0) {
            this.mulValue.push(number);
            switch (this.mulValue[2]) {
                case "add":
                    this.initialValue = this.initialValue - this.mulValue[1] + sum(this.mulValue) * this.mulValue[1];
                    break;
                case "subtract":
                    this.initialValue = this.initialValue + this.prevValue - number * this.prevValue;
                    break;
                case "multiply":
                    this.initialValue = this.initialValue + number * this.mulValue[1];
                    break;

                    this.prevOperation = "multiply";
                    this.prevValue = number;
            }
        } else
            this.initialValue *= number;

        return this;
    }

    devide(number) {
        this.powVelue = [];
        this.mulValue = [];


        if (this.prevOperation == "add")
            this.initialValue = this.initialValue - this.prevValue + this.prevValue / number;
        else
        if (this.prevOperation == "subtract")
            this.initialValue = this.initialValue + this.prevValue - this.prevValue / number;
        else
            this.initialValue /= number;


        this.prevOperation = "devide";
        this.prevValue = number;
        return this;
        // your implementation

    }




    pow(number) {
        function sum(powVelue) {
            let sum = 1;
            if (powVelue.length > 4) {
                for (let i = 3; i < powVelue.length - 1; i++)
                    sum = Math.pow(powVelue[i], powVelue[i + 1]);
                return sum;
            }


            return powVelue[3];

        }


        if (this.prevOperation !== "pow") {

            this.powVelue.push(this.initialValue);
            this.powVelue.push(this.prevValue);
            this.powVelue.push(this.prevOperation);
            this.powVelue.push(number);

            switch (this.powVelue[2]) {
                case "add":
                    this.initialValue = this.powVelue[0] - this.powVelue[1] + Math.pow(this.powVelue[1], number);
                    break;
                case "subtract":
                    this.initialValue = this.powVelue[0] + this.powVelue[1] - Math.pow(this.powVelue[1], number);
                    break;
                case "multiply":
                    this.initialValue = this.powVelue[0] / this.powVelue[1] * Math.pow(this.powVelue[1], number);
                    break;
                case "devide":
                    this.initialValue = this.powVelue[0] * this.powVelue[1] / Math.pow(this.powVelue[1], number);
                    break;
            }

        } else {
            this.powVelue.push(number);

            switch (this.powVelue[2]) {
                case "add":
                    this.initialValue = this.powVelue[0] - this.powVelue[1] + Math.pow(this.powVelue[1], sum(this.powVelue));
                    break;
                case "subtract":
                    this.initialValue = this.powVelue[0] + this.powVelue[1] - Math.pow(this.powVelue[1], sum(this.powVelue));
                    break;
                case "multiply":
                    this.initialValue = this.powVelue[0] / this.powVelue[1] * Math.pow(this.powVelue[1], sum(this.powVelue));
                    break;
                case "devide":
                    this.initialValue = this.powVelue[0] * this.powVelue[1] / Math.pow(this.powVelue[1], sum(this.powVelue));
                    break;



            }


        }


        this.prevValue = number;
        this.prevOperation = "pow";
        return this;
        // your implementation
    }
}
SmartCalculator.prototype.valueOf = function() { return this.initialValue };


//const calculator = new SmartCalculator(2);

//const value = calculator.subtract(28).add(41).multiply(2).pow(2).add(48).add(15).add(75);

//console.log(value.initialValue);


module.exports = SmartCalculator;