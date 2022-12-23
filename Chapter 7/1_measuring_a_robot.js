/*
**************************************************************************************************************************************************
Problem: Measuring a robot
    It’s hard to objectively compare robots by just letting them solve a few scenarios. 
    Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.

    Write a function compareRobots that takes two robots (and their starting memory). 
    It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output 
    the average number of steps each robot took per task.

    For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.

    function compareRobots(robot1, memory1, robot2, memory2) {
    // Your code here
    }

    compareRobots(routeRobot, [], goalOrientedRobot, []);
**************************************************************************************************************************************************
*/

  import { routeRobot, goalOrientedRobot,VillageState} from './robot.js'

  //Modified the run robot code
  export function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }

  export function compareRobots(robot1, memory1, robot2, memory2) {
    let robot1Solution = []
    let robot2Solution = []
    for (let i=0; i<100; i++){
        let village = VillageState.random()
        robot1Solution.push(runRobot(village, robot1,memory1));
        robot2Solution.push(runRobot(village, robot2,memory2));
    }
    robot1Solution.reduce((a, b) => a + b) / robot1Solution.length;
    robot2Solution.reduce((a, b) => a + b) / robot2Solution.length;
    let r1avg = robot1Solution.reduce((a, b) => a + b) / robot1Solution.length;
    let r2avg = robot2Solution.reduce((a, b) => a + b) / robot2Solution.length;
    console.log(`robot 1 avg ${r1avg}, robot 2 avg ${r2avg}`)
  }
  
  //compareRobots(routeRobot, [], goalOrientedRobot, []);