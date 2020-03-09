let assert = require('assert')
let {Laptop, ProcessorUpgrade, MemoryUpgrade, HardDriveUpgrade, GraphicsCardUpgrade, BatteryUpgrade, CaseUpgrade} = require("../index")
let laptop;
let processUpgrade;
let memoryUpgrade;
let caseUpgrade;
let hardDriveUpgrade;
let graphicsCardUpgrade;
let batteryUpgrade;
  before(function() {
    laptop = new Laptop("TomPower", "description.", 999.99);
    processUpgrade = new ProcessorUpgrade(laptop,"4.2ghz processor.", 249.99);
    memoryUpgrade = new MemoryUpgrade(laptop, '16gb of extra memory.', 59.99);
    caseUpgrade = new CaseUpgrade(laptop, 'a nice shiny case.', 19.99);
    hardDriveUpgrade = new HardDriveUpgrade(laptop, '1tb SSD.', 149.99);
    graphicsCardUpgrade = new GraphicsCardUpgrade(laptop, '16gb Geforce', 279.99);
    batteryUpgrade = new BatteryUpgrade(laptop, "now offering 2 hours of batter life.", 499.99)
  });

describe('Laptop', function() {
  
  describe('#constructor', function() {
    it('should return an instance of Laptop', function(){
        assert.equal(laptop instanceof Laptop, true)
    })
  })
  describe('#getName()', function() {
    it('should return the laptop name', function() {
      assert.equal(laptop.getName(), "TomPower");
    });
  });

  describe('#getDescription()', function() {
    it('should return the correct laptop description', function() {
        assert.equal(laptop.getDescription(), "description. - £999.99")
    });
  })

  describe('#getPrice()', function() {
    it('should return the correct laptop price', function() {
      assert.equal(laptop.getPrice(), '999.99')
    })
  })

  describe('#region totalPrice()', function() {
    it('should return the total price', function() {
      assert.equal(laptop.totalPrice(), 999.99)
    })
  })

});

describe('Laptop Decorator should throw if laptop is not of correct type', function() {
  let notALaptop = {}
  it('constructor should throw when not a laptop', function() {
    assert.throws(function() {
      ProcessorUpgrade(notALaptop, 'upgrade',14.99)
    }, Error, 'laptop must be an instance of Laptop'
  )
})
});

describe('LaptopDecorator - helper functions should return correct info', function() {

  describe('#getDescription()', function() {
    it('should return the description of the laptop and processor upgrade', function(){
      assert.equal(processUpgrade.getDescription(), 'description. - £999.99\n4.2ghz processor. - £249.99')
    })
    it('should return the description of the laptop and hard drive upgrade', function(){
      assert.equal(hardDriveUpgrade.getDescription(), 'description. - £999.99\n1tb SSD. - £149.99')
    })
  })
  describe('#getPrice()', function() {
    it('should return the price of the processor upgrade', function() {
      assert.equal(processUpgrade.getPrice(), 249.99)
      
    })
    it('should return the price of the hdd upgrade', function() {
      assert.equal(hardDriveUpgrade.getPrice(), 149.99)
    })
  })

  describe('#totalPrice()', function() {
    it('should return the price of the laptop with the processor upgrade', function() {
      assert.equal(processUpgrade.totalPrice(), "1249.98")
    });
    it('should return the price of the laptop with the hard drive upgrade', function() {
      assert.equal(hardDriveUpgrade.totalPrice(), 1149.98)
    });

    it('should return the price of the laptop with the processor and hard drive upgade', function() {
      let newLaptop = new Laptop('New',"description", 500);
      let newLaptopProcessor = new ProcessorUpgrade(newLaptop,'50mhz', 50);
      let newHDDUpgrade = new HardDriveUpgrade(newLaptopProcessor, '16mb',20);

      assert.equal(newHDDUpgrade.totalPrice(),570.00 )
    })
  })
})

describe('ProcessorUpgrade', function() {

  describe('#getName()', function(){
    it('should return the name of the processor upgrade', function() {
      assert.equal(processUpgrade.getName(), 'Processor Upgrade')
    })
  });
 

});

describe('MemoryUpgrade', function() {
  describe('#getName()', function(){
    it('should return the name of the memory upgrade', function() {
      assert.equal(memoryUpgrade.getName(), 'Memory')
    })
  });


});

describe('CaseUpgrade()', function() {
  describe('#getName()', function() {
    it('should return the name of the case upgrade', function() {
      assert.equal('Shiny Case', caseUpgrade.getName())
    })
  })

}); 

describe('HardDriveUpgrade()', function() {
  describe('#getName()', function() {
    it('should return the name of the hdd upgrade', function() {
      assert.equal('Hard Drive', hardDriveUpgrade.getName())
    })
  })
  
}); 

describe('GraphicsCardUpgrade()', function(){
  describe('#getName()', function() {
    it('should return the name of the graphics card upgrade', function() {
      assert.equal('Graphics Card', graphicsCardUpgrade.getName());
    })
  })
});

describe("BatteryUpgrade()", function() {
  describe('#getName()', function() {
    it('should return the name of the battery upgrade', function() {
      assert.equal('Battery Upgrade', batteryUpgrade.getName())
    })
  })
});


describe("All upgrades", function() {
  
  let nlaptop = new Laptop("TomPower", "description.", 999.99);
  let nprocessUpgrade = new ProcessorUpgrade(nlaptop,"4.2ghz processor.", 249.99);
  let nmemoryUpgrade = new MemoryUpgrade(nprocessUpgrade, '16gb of extra memory.', 59.99);
  let ncaseUpgrade = new CaseUpgrade(nmemoryUpgrade, 'a nice shiny case.', 19.99);
  let nhardDriveUpgrade = new HardDriveUpgrade(ncaseUpgrade, '1tb SSD.', 149.99);
  let ngraphicsCardUpgrade = new GraphicsCardUpgrade(nhardDriveUpgrade, '16gb Geforce', 279.99);
  let nbatteryUpgrade = new BatteryUpgrade(ngraphicsCardUpgrade, "now offering 2 hours of battery life.", 499.99)
  describe('#getDescription()', function() {

    it('should return the full description', function() {
      assert.equal(nbatteryUpgrade.getDescription(), "description. - £999.99\n4.2ghz processor. - £249.99\n16gb of extra memory. - £59.99\na nice shiny case. - £19.99\n1tb SSD. - £149.99\n16gb Geforce - £279.99\nnow offering 2 hours of battery life. - £499.99");
    })
  })
  describe('totalPrice()', function() {
    it('should return the total price with all upgrade', function() {
      assert.equal(Number.parseFloat(nbatteryUpgrade.totalPrice()).toFixed(2),2259.93 )
    })
  })
})




