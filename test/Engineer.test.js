const Engineer = require("../lib/Engineer");

describe("Engineer Initialization", () => {
    it ("A new engineer object should be created", ()=>{
        const newEngineer = new Engineer()
        expect(typeof(newEngineer)).toBe("object");
        });
    //-----------------------------------property tests-----------------------------------
    it("Should create a new Engineer with the key -name- which has a string property", () => {
        // Arrange
        const testName = "John";
        // Act
        const newEngineer = new Engineer(testName, "test", "test", "test");
        // Assert
        expect(newEngineer.name).toBe(testName);
        });
    it("Should create a new Engineer with the key -email- which has a number property", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newEngineer = new Engineer("test", testemail, "test", "test");
        // Assert
        expect(newEngineer.email).toEqual(testemail);
        });
    it("Should create a new Engineer with the key -id- which has a string property", () => {
        // Arrange
        const testid = 1;
        // Act
        const newEngineer = new Engineer("test", "test", testid, "test");
        // Assert
        expect(newEngineer.id).toEqual(testid);
      });

    it("Should create a new Engineer with the key -gitHub- which has a string property", () => {
        // Arrange
        const testGithub = "GitHub username: Dev Dave";
        // Act
        const newEngineer = new Engineer("test", "test", "test", testGithub);
        // Assert
        expect(newEngineer.github).toEqual(testGithub);
        });


      //---------------------------------------method tests--------------------------------------
    it("Engineer getName method", () => {
        // Arrange
        const testName = "John";
        // Act
        const newEngineer = new Engineer(testName, "test", "test", "test");
        // Assert
        expect(newEngineer.getName()).toBe(testName);
    });
    it("Engineer getEmail method", () => {
        // Arrange
        const testemail = "john@doe.com";
        // Act
        const newEngineer = new Engineer("test", testemail, "", "test");
        // Assert
        expect(newEngineer.getEmail()).toEqual(testemail);
        });
    it("Engineer getId method", () => {
        // Arrange
        const testid = 1;
        // Act
        const newEngineer = new Engineer("test", "test", testid, "test");
        // Assert
        expect(newEngineer.getId()).toEqual(testid);
      });
    it("Engineer getGitHub method", () => {
        // Arrange
        const testGithub = "GitHub username: Dev Dave";
        // Act
        const newEngineer = new Engineer("test", "test", "test", testGithub);
        // Assert
        expect(newEngineer.getGithub()).toEqual(testGithub);
      });
    it("Engineer role should return Engineer", () => {
        // Act
        const newEngineer = new Engineer("test", "test", "test", "test");
        // Assert
        expect(newEngineer.getRole()).toEqual("Engineer");
        });

});