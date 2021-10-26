import Rover from "./marsRover.js";
import readline from "readline";

export const input = async (nums) => {

    const readL = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let rover;
    let inputNo = nums || 1;
    let output;
    const step = {
        1: 'Plateau: ',
        2: 'Rover1 Landing: ',
        3: 'Rover1 Instructions: ',
        4: 'Rover2 Landing: ',
        5: 'Rover2 Instructions: ',
    }
    console.log('Welcome to marsRover')
    readL.on('line', (data) => {
        console.log(step[inputNo], data)
        const dataSplit = data.split(" ");

        if (inputNo === 1) {
            if (!(/\s/g).test(data)) {
                console.log('Please add space to your input');
                process.exit();
            }
            rover = new Rover(dataSplit[0], dataSplit[1]);
            inputNo++;
        } else if (inputNo === 2) {
            if (!(/\s/g).test(data)) {
                console.log('Please add space to your input');
                process.exit();
            }
            rover.setPosition(dataSplit[0], dataSplit[1], dataSplit[2]);
            inputNo++;
        } else if (inputNo === 3) {
            rover.processRover(data);
            output = rover.printPosition();
            inputNo++;
        } else if (inputNo === 4) {
            if (!(/\s/g).test(data)) {
                console.log('Please add space to your input');
                process.exit();
            }
            rover.setPosition(dataSplit[0], dataSplit[1], dataSplit[2]);
            inputNo++;
        } else if (inputNo === 5) {
            rover.processRover(data);
            console.log(output);
            console.log(rover.printPosition());
            process.exit();
        }
    }).on('close', () => {
        console.log('Have a great day!');
        process.exit();
    });
    return inputNo
}

input();
