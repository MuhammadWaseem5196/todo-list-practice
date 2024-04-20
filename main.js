import inquirer from "inquirer";
let content = [];
let condition = true;
while (condition) {
    const questionA = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "Wellcome to the TODOLIST you can proceed with following",
        choices: ["Add", "view", "Delete", "update", "Exit"]
    });
    if (questionA.question1 === "Add") {
        let questionB = await inquirer.prompt({
            name: "add1",
            type: "input",
            message: "Add Here",
        });
        content.push(questionB.add1);
        console.log(content);
        console.log("content added Sucessfully");
    }
    ;
    if (questionA.question1 === "Delete") {
        let questionC = await inquirer.prompt({
            name: "deletee",
            type: "list",
            message: "Delete from below",
            choices: content
        });
        let getindex = content.indexOf(questionC.deletee);
        content.splice(getindex, 1);
        console.log(content);
        console.log("Deleted sucessfully");
    }
    ;
    if (questionA.question1 === "update") {
        let asking = await inquirer.prompt([{
                name: "update",
                type: "list",
                message: "selcet to Update",
                choices: content
            },
            {
                name: "update1",
                type: "input",
                message: "Enter New Message",
            }
        ]);
        let indexnum = content.indexOf(asking.update);
        content[indexnum] = asking.update1;
        console.log(content);
    }
    ;
    if (questionA.question1 === "Exit") {
        condition = false;
        console.log("Thankyou for using our services Allah Hafiz");
    }
    ;
    if (questionA.question1 === "view") {
        console.log(content);
    }
    ;
}
