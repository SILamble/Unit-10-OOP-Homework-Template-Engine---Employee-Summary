const Employee = require("../lib/Employee");

describe("Employee Initialization", () => {
    it ("A new employee object should be created", ()=>{
      const newEmployee = new Employee()
      expect(typeof(newEmployee)).toBe("object");
    });
    //property tests
    it("Should create a new employee with the key -name- which has a string property", () => {
      // Arrange
      const testName = "John";
      // Act
      const newEmployee = new Employee(testName, "", "",);
      // Assert
      expect(newEmployee.name).toBe(testName);
    });
    it("Should create a new employee with the key -email- which has a number property", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newEmployee = new Employee("test", testemail, "",);
        // Assert
        expect(newEmployee.email).toEqual(testemail);
        });
    it("Should create a new employee with the key -id- which has a string property", () => {
        // Arrange
        const testid = 1;
        // Act
        const newEmployee = new Employee("test", "test", testid);
        // Assert
        expect(newEmployee.id).toEqual(testid);
      });


      //method tests
    it("Employee getName method", () => {
      // Arrange
      const testName = "John";
      // Act
      const newEmployee = new Employee(testName, "", "",);
      // Assert
      expect(newEmployee.getName()).toBe(testName);
    });
    it("Employee getEmail method", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newEmployee = new Employee("test", testemail, "",);
        // Assert
        expect(newEmployee.getEmail()).toEqual(testemail);
        });
    it("Employee getId method", () => {
        // Arrange
        const testid = 1;
        // Act
        const newEmployee = new Employee("test", "test", testid);
        // Assert
        expect(newEmployee.getId()).toEqual(testid);
      });
    it("Employee role should return employee", () => {
      // Act
      const newEmployee = new Employee("test", "test", "test");
      // Assert
      expect(newEmployee.getRole()).toEqual("Employee");
    });

});