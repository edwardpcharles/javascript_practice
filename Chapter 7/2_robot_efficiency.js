/*
**************************************************************************************************************************************************
Problem: Robot Efficiency
    Can you write a robot that finishes the delivery task faster than goalOrientedRobot? 
    If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?

    If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
**************************************************************************************************************************************************
*/

import { compareRobots } from './1_measuring_a_robot.js'
import { goalOrientedRobot, findRoute, roadGraph } from './robot.js'

function goalOrientedRobot2({place, parcels}, route) {
  let holder = parcels.length-1;
  for (let i=0; i<parcels.length; i++){
     if (parcels[i].place != place) {
      if (findRoute(roadGraph,place,parcels[i].place).slice(1).length <= holder){
          holder = i;
        }
      } else {
      if (findRoute(roadGraph,place,parcels[i].address).slice(1).length <holder){
          holder = i
        }
      }
  }
    if (route.length == 0) {
      let parcel = parcels[holder];
      if (parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)};
  }

  compareRobots(goalOrientedRobot, [], goalOrientedRobot2, []);