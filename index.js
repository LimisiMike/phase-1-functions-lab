// Function 1

function distanceFromHqInBlocks(someValue) {
    if (someValue<42){
        return(42-someValue);
      }
      else {
    
      return(someValue-42);
    }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}

// Distance travelled in feet
function distanceTravelledInFeet(a,b){
    if (b>a){
      return((b-a)*264);
    }
    else
      return((a-b)*264);
  }

// Fare calculation

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance<= 400){
        return 0;
    }
    if (distance>=400 && distance<=2000) {
        return (distance-400)*0.02;
    }
    else if (distance>=2000 && distance<=2500) {
        return 25;
    }
    else if (distance>2500) {
        return "cannot travel that far";
    }
}
    // if (blocks === 43 && block === 42) {
    //     console.log(`${blocks-block} block`)
    //   return (`${blocks-block} block`)

    // }else if (blocks === 50 && block === 42) {
    //     console.log(`${blocks-block} blocks`)
    //   return (`${blocks-block} blocks`)
    // }else if (block === 42 && blocks === 34) {
    //     console.log(`${blocks-block} blocks`)
    //   return (`${blocks-block} blocks`)
    // }



// function distanceFromHqInBlocks (blocks, block) {
//     if (blocks ===43 && block === 42) {
//         console.log(`${blocks-block} block`)
//       return (`${blocks-block} block`)
//     }
// }distanceFromHqInBlocks(43, 42);


// function distanceFromHqInBlocks (blocks, block) {
//     if (blocks ===50 && block === 42) {
//         console.log(`${blocks-block} blocks`)
//       return (`${blocks-block} blocks`)
//     }
// }distanceFromHqInBlocks(50, 42);

// // Distance below 42

// function distanceFromHqInBlocks (block, blocks) {
//     if (block ===42 && blocks === 34) {
//         console.log(`${blocks-block} blocks`)
//       return (`${blocks-block} blocks`)
//     }
// }distanceFromHqInBlocks(42, 34);



