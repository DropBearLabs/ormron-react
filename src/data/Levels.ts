import { ILevel } from "./Types";
const SCREENWIDTH = 1024;
const GROUNDLEVEL = 200;


export const levels: ILevel[] = [
    {
      id: "ormron_street",
      connections: [
        {id:"con1", to: "ormron_arena", image: "temp-obj1.png", position: {x:SCREENWIDTH-200, y:GROUNDLEVEL}},
        {id:"con2",to: "ormron_garden", image: "temp-obj2.png", position: {x:400, y:GROUNDLEVEL}}
      ],
      backgrounds: [{image: "temp1.jpg"}],
      npcs: [
        {id: "npc-Olija", name: "Olija", position: {x:30, y:GROUNDLEVEL-50}, image: "temp-npc1.png", 
          trigger: {dialogueId: "ormron_street_Maya_1", triggerType: "DIALOGUE"}, state: "temp-icon1"},
        {id: "npc-Dario", name: "Dario", position: {x:700, y:GROUNDLEVEL-50}, image: "temp-npc2.png", trigger: false}
      ]
    },
    {
      id: "ormron_arena",
      connections: [
        {id:"con3", to: "ormron_street", image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}},
      ],
      backgrounds: [{image: "temp2.jpg"}],
      npcs: []
    },
    {
      id: "ormron_garden",
      connections: [
        {id:"con4", to: "ormron_street", image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}},
        {id:"con5", to: "ormron_school", image: "temp-obj1.png", position: {x:400, y:GROUNDLEVEL}},
        {id:"con6", to: "ormron_gazebo", image: "temp-obj2.png", position: {x:SCREENWIDTH-200, y:GROUNDLEVEL}},
      ],
      backgrounds: [{image: "temp3.jpg"}],
      npcs: []
    },
    {
      id: "ormron_gazebo",
      connections: [
        {id:"con7", to: "ormron_garden", image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}},
      ],
      backgrounds: [{image: "temp5.jpg"}],
      npcs: []
    },
    {
      id: "ormron_school",
      connections: [
        {id:"con8", to: "ormron_garden", image: "temp-obj3.png", position: {x:10, y:GROUNDLEVEL}}
      ],
      backgrounds: [{image: "temp4.jpg"}],
      npcs: []
    },
  ]