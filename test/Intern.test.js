const Intern = require("../lib/Intern");

describe("Intern Initialization", () => {
    it ("A new intern object should be created", ()=>{
        const newIntern = new Intern()
        expect(typeof(newIntern)).toBe("object");
        });
    //-----------------------------------property tests-----------------------------------
    it("Should create a new Intern with the key -name- which has a string property", () => {
        // Arrange
        const testName = "John";
        // Act
        const newIntern = new Intern(testName, "test", "test", "test");
        // Assert
        expect(newIntern.name).toBe(testName);
        });
    it("Should create a new Intern with the key -email- which has a number property", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newIntern = new Intern("test", testemail, "test", "test");
        // Assert
        expect(newIntern.email).toEqual(testemail);
        });
    it("Should create a new Intern with the key -id- which has a string property", () => {
        // Arrange
        const testid = 1;
        // Act
        const newIntern = new Intern("test", "test", testid, "test");
        // Assert
        expect(newIntern.id).toEqual(testid);
      });

    it("Should create a new Intern with the key -school- which has a string property", () => {
        // Arrange
        const testSchool = "Diffield Secondary";
        // Act
        const newIntern = new Intern("test", "test", "test", testSchool);
        // Assert
        expect(newIntern.school).toEqual(testSchool);
        });


      //---------------------------------------method tests--------------------------------------
    it("Intern getName method", () => {
        // Arrange
        const testName = "John";
        // Act
        const newIntern = new Intern(testName, "test", "test", "test");
        // Assert
        expect(newIntern.getName()).toBe(testName);
    });
    it("Intern getEmail method", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newIntern = new Intern("test", testemail, "", "test");
        // Assert
        expect(newIntern.getEmail()).toEqual(testemail);
        });
    it("Intern getId method", () => {
        // Arrange
        const testid = 1;
        // Act
        const newIntern = new Intern("test", "test", testid, "test");
        // Assert
        expect(newIntern.getId()).toEqual(testid);
      });
    it("Intern getSchool method", () => {
        // Arrange
        const testSchool = "Driffield Secondary";
        // Act
        const newIntern = new Intern("test", "test", "test", testSchool);
        // Assert
        expect(newIntern.getSchool()).toEqual(testSchool);
      });
    it("Intern role should return Intern", () => {
        // Act
        const newIntern = new Intern("test", "test", "test", "test");
        // Assert
        expect(newIntern.getRole()).toEqual("Intern");
        });

});