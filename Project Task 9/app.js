
let raceNumber = Math.floor(Math.random() * 1000);


let registeredEarly = true;


let runnerAge = 23; 


if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}


if (runnerAge > 18 && registeredEarly) {
    console.log(`You are an adult and registered early. Your race number is ${raceNumber}, and you will race at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`You are an adult and registered late. Your race number is ${raceNumber}, and you will race at 11:00 am.`);
} else if(runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}, and you will race at 12:30 pm.`);
} else{
    console.log(`Please see the registration desk.`);
  }