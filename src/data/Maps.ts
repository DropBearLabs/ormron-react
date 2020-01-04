import { IMap } from "./Types";
const MIDDLE_X = 500;
const MIDDLE_Y = 350;

export const maps: IMap[] = [
  {
    id: 0,
    name: "Ormron",
    levels: [
      {
        id: 0,
        name: "Ormron streets",
        image: "temp-map1.png",
        open: true,
        position: { x: MIDDLE_X - 270, y: MIDDLE_Y }
      },
      {
        id: 1,
        name: "Ormron arena",
        image: "temp-map2.png",
        open: false,
        position: { x: MIDDLE_X - 270, y: MIDDLE_Y + 80 }
      },
      {
        id: 2,
        name: "Ormron garden",
        image: "temp-map3.png",
        open: false,
        position: { x: MIDDLE_X - 340, y: MIDDLE_Y - 60 }
      },
      {
        id: 3,
        name: "Ormron gazebo",
        image: "temp-map4.png",
        open: false,
        position: { x: MIDDLE_X - 410, y: MIDDLE_Y }
      },
      {
        id: 4,
        name: "Ormron school",
        image: "temp-map5.png",
        open: false,
        position: { x: MIDDLE_X - 340, y: MIDDLE_Y + 30 }
      },
      {
        id: 5,
        name: "Grandmaster office",
        image: "temp-map6.png",
        open: false,
        position: { x: MIDDLE_X - 390, y: MIDDLE_Y + 90 }
      },
      {
        id: 6,
        name: "Desert",
        image: "temp-map7.png",
        open: false,
        position: { x: MIDDLE_X - 200, y: MIDDLE_Y - 50 }
      },
      {
        id: 7,
        name: "Desert",
        image: "temp-map7.png",
        open: false,
        position: { x: MIDDLE_X - 130, y: MIDDLE_Y - 100 }
      }
    ]
  }
];
