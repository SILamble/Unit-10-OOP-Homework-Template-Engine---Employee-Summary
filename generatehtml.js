// const fs = require("fs");
// const app = require("./app");
// const $teamCards = $("#teamMembers")
// const $roleCards = $("<div>").addClass("card col");
// const $nameElement = $("<h5>"); 
// const $emailElement = $("<p>");
// const $idElement = $("<p>");
// const $miscElement = $("<p>");
// const $roleElement = $("<p>");

// function generateManagercard(){
//     $teamCards.append($roleCards.append(
//         $nameElement.text({Name}), 
//         $roleElement.text({getRole()}), 
//         $emailElement.text({Email}), 
//         $idElement.text({id}),
//         $miscElement.text("Office Number: " + {officeNumber})),
//     )};

// function generateEngineercard(){
//     $teamCards.append($roleCards.append(
//         $nameElement.text({Name}), 
//         $roleElement.text({getRole()}), 
//         $emailElement.text({Email}), 
//         $idElement.text({id}),
//         $miscElement.text("Github Username: " + {Github})),
//     )};

// function generateInterncard(){
//     $teamCards.append($roleCards.append(
//         $nameElement.text({Name}), 
//         $roleElement.text({getRole()}), 
//         $emailElement.text({Email}), 
//         $idElement.text({id}),
//         $miscElement.text("School: " + {School})),
//     )};

// function generateHTML(){
//     teamArray.forEach(element => {
//         switch({role}){
//             case Manager:
//                 generateManagercard();
//             case Engineer:
//                 generateEngineercard();
//             case intern:
//                 generateInterncard()

        
//         }
        
//     });

// }

// module.exports = generateHTML