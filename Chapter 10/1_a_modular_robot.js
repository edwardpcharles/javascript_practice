/*
**************************************************************************************************************************************************
Problem: A modular robot
       These are the bindings that the project from Chapter 7 creates:

       roads
       buildGraph
       roadGraph
       VillageState
       runRobot
       randomPick
       randomRobot
       mailRoute
       routeRobot
       findRoute
       goalOrientedRobot

       If you were to write that project as a modular program, what modules would you create? Which module would depend on which other module,
       and what would their interfaces look like?

       Which pieces are likely to be available prewritten on NPM? Would you prefer to use an NPM package or write them yourself?
**************************************************************************************************************************************************
*/

/*
       I would create a roads, village, and route module. 
       -Roads would include:  roads, buildGraph, roadGraph
       -Village would include: villageState
       -Route would include: runRobot, randomPick, randomRobot, mailRoute, routeRobot, findRoute, goalOrientedRobot

       Route would depend on village, and both would depend on roads. Roads would interact with both methods via roadGraph. 
       Route would interact with Village via villageState. 

       findRoute and build graph are likely to be available on NPM. I would choose the NPM module if it was preformant and I understood how it worked.
*/