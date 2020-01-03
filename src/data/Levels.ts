import { ILevel } from "./Types";
const SCREENWIDTH = 1024;
const GROUNDLEVEL = 200;


export const levels: ILevel[] = [
    {
      // 0
      id: "ormron_street",
      connections: [
        {id:"con1", to: 1, image: "temp-obj1.png", position: {x:SCREENWIDTH-200, y:GROUNDLEVEL}},
        {id:"con2",to: 2, image: "temp-obj2.png", position: {x:400, y:GROUNDLEVEL}}
      ],
      backgrounds: [{image: "temp1.jpg"}],
      npcs: [
        {id: "npc_Olija", name: "Olija", position: {x:30, y:GROUNDLEVEL-50}, image: "temp-npc1.png", 
          trigger: {dialogueId: 0, triggerType: "DIALOGUE"}},
        {id: "npc_Dario", name: "Dario", position: {x:700, y:GROUNDLEVEL-50}, image: "temp-npc2.png", 
          trigger: {dialogueId: 3, triggerType: "DIALOGUE"}}
      ]
    },
    {
      // 2
      id: "ormron_arena",
      connections: [
        {id:"con3", to: 0, image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}},
      ],
      backgrounds: [{image: "temp2.jpg"}],
      npcs: []
    },
    {
      // 3
      id: "ormron_garden",
      connections: [
        {id:"con4", to: 0, image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}},
        {id:"con5", to: 4, image: "temp-obj1.png", position: {x:400, y:GROUNDLEVEL}},
        {id:"con6", to: 3, image: "temp-obj2.png", position: {x:SCREENWIDTH-200, y:GROUNDLEVEL}},
      ],
      backgrounds: [{image: "temp3.jpg"}],
      npcs: []
    },
    {
      // 4
      id: "ormron_gazebo",
      connections: [
        {id:"con7", to: 3, image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}},
      ],
      backgrounds: [{image: "temp5.jpg"}],
      npcs: []
    },
    {
      // 5
      id: "ormron_school",
      connections: [
        {id:"con8", to: 3, image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}}
      ],
      backgrounds: [{image: "temp4.jpg"}],
      npcs: []
    },
  ]