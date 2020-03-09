class Laptop {
    constructor(name,description,price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description + ' - £' + this.price + '';
    }

    getPrice() {
        return this.price
    }

    totalPrice() {
        return this.price
    }
}

class LaptopDecorator extends Laptop {
    constructor(laptop, name, description, price) {
        if(laptop instanceof Laptop === false) {
            throw("laptop must be an instance of Laptop")
        }
        super()
        this.name = name
        this.laptop = laptop;
        this.description = description;
        this.price = price;
    }

    getDescription() {
        return this.laptop.getDescription() + '\n' + this.description + ' - £' + this.price + ''; 
    }

    totalPrice() {
    
        return this.laptop.totalPrice() + this.price;
    }
}

class ProcessorUpgrade extends LaptopDecorator {
    constructor(laptop,description,price) {
        super(laptop,"Processor Upgrade", description,price)
    }
}

class MemoryUpgrade extends LaptopDecorator {
    constructor(laptop,description,price) {  
        super(laptop, "Memory", description,price)
    }
}

class HardDriveUpgrade extends LaptopDecorator {
    constructor(laptop,description,price) {
        super(laptop, "Hard Drive", description, price)
    }
}
class CaseUpgrade extends LaptopDecorator {
    constructor(laptop,description,price) {
        super(laptop, "Shiny Case", description,price)
    }
}

class GraphicsCardUpgrade extends LaptopDecorator {
    constructor(laptop, description,price) {
        super(laptop,"Graphics Card", description,price)
    }
}

class BatteryUpgrade extends LaptopDecorator {
    constructor(laptop, description,price) {
        super(laptop,"Battery Upgrade", description,price)
    }
}


module.exports = { Laptop:Laptop,ProcessorUpgrade:ProcessorUpgrade, MemoryUpgrade:MemoryUpgrade,HardDriveUpgrade:HardDriveUpgrade, GraphicsCardUpgrade:GraphicsCardUpgrade, BatteryUpgrade:BatteryUpgrade, CaseUpgrade:CaseUpgrade}