const Manager = require("../lib/Manager");

describe("Manager Initialization", () => {
    it ("A new Manager object should be created", ()=>{
        const newManager = new Manager()
        expect(typeof(newManager)).toBe("object");
        });
    //-----------------------------------property tests-----------------------------------
    it("Should create a new Manager with the key -name- which has a string property", () => {
        // Arrange
        const testName = "John";
        // Act
        const newManager = new Manager(testName, "test", "test", "test");
        // Assert
        expect(newManager.name).toBe(testName);
        });
    it("Should create a new Manager with the key -email- which has a number property", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newManager = new Manager("test", testemail, "test", "test");
        // Assert
        expect(newManager.email).toEqual(testemail);
        });
    it("Should create a new Manager with the key -id- which has a string property", () => {
        // Arrange
        const testid = 1;
        // Act
        const newManager = new Manager("test", "test", testid, "test");
        // Assert
        expect(newManager.id).toEqual(testid);
      });

    it("Should create a new Manager with the key -school- which has a string property", () => {
        // Arrange
        const testOffice = 12;
        // Act
        const newManager = new Manager("test", "test", "test", testOffice);
        // Assert
        expect(newManager.office).toEqual(testOffice);
        });


      //---------------------------------------method tests--------------------------------------
    it("Manager getName method", () => {
        // Arrange
        const testName = "John";
        // Act
        const newManager = new Manager(testName, "test", "test", "test");
        // Assert
        expect(newManager.getName()).toBe(testName);
    });
    it("Manager getEmail method", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newManager = new Manager("test", testemail, "", "test");
        // Assert
        expect(newManager.getEmail()).toEqual(testemail);
        });
    it("Manager getId method", () => {
        // Arrange
        const testid = 1;
        // Act
        const newManager = new Manager("test", "test", testid, "test");
        // Assert
        expect(newManager.getId()).toEqual(testid);
      });
    it("Manager getOffice method", () => {
        // Arrange
        const testOffice = 12;
        // Act
        const newManager = new Manager("test", "test", "test", testOffice);
        // Assert
        expect(newManager.getOffice()).toEqual(testOffice);
      });
    it("Manager role should return Manager", () => {
        // Act
        const newManager = new Manager("test", "test", "test", "test");
        // Assert
        expect(newManager.getRole()).toEqual("Manager");
        });

});