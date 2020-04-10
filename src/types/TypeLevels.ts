export enum ConnectionStatus {
  closed = "closed",
  open = "open",
  visited = "visited"
}

interface IConnectedLevel<Connections extends string, NPCs extends string> {
  id: string;
  connections: { [s in Connections]: ConnectionStatus };
  npcs: { [s in NPCs]: number | null | false | string };
}

type MapAll<T, K extends keyof T> = T extends {} ? keyof T[K] : never;

export type LevelConnections = MapAll<IGsoLevel, "connections">;

export enum IGsoLevelOrmronStreetConnections {
  street_to_garden = "street_to_garden",
  street_to_arena = "street_to_arena",
  street_to_map = "street_to_map"
}
export enum IGsoLevelOrmronStreetNPCs {
  npc_Olija = "npc_Olija",
  npc_Dario = "npc_Dario",
  char_Maya = "char_Maya"
}
type IGsoLevelOrmronStreet = IConnectedLevel<
  IGsoLevelOrmronStreetConnections,
  IGsoLevelOrmronStreetNPCs
> & {
  id: string;
};

export enum IGsoLevelOrmronArenaConnections {
  arena_to_street = "arena_to_street"
}
export enum IGsoLevelOrmronArenaNPCs {
  enemy_Snake1 = "enemy_Snake1",
  npc_Dario1 = "npc_Dario1"
}
type IGsoLevelOrmronArena = IConnectedLevel<
  IGsoLevelOrmronArenaConnections,
  IGsoLevelOrmronArenaNPCs
> & {
  id: string;
};

export enum IGsoLevelOrmronGardenConnections {
  garden_to_street = "garden_to_street",
  garden_to_gazebo = "garden_to_gazebo",
  garden_to_school = "garden_to_school"
}
export enum IGsoLevelOrmronGardenNPCs {
  char_Tara = "char_Tara",
  char_Nell = "char_Nell",
  npc_AmuletGirl = "npc_AmuletGirl"
}
type IGsoLevelOrmronGarden = IConnectedLevel<
  IGsoLevelOrmronGardenConnections,
  IGsoLevelOrmronGardenNPCs
> & {
  id: string;
};

export enum IGsoLevelOrmronGazeboConnections {
  gazebo_to_garden = "gazebo_to_garden"
}
export enum IGsoLevelOrmronGazeboNPCs {
  char_Grey = "char_Grey",
  npc_SchoolGirl = "npc_SchoolGirl"
}
type IGsoLevelOrmronGazebo = IConnectedLevel<
  IGsoLevelOrmronGazeboConnections,
  IGsoLevelOrmronGazeboNPCs
> & {
  id: string;
};

export type IGsoLevel =
  | IGsoLevelOrmronStreet
  | IGsoLevelOrmronArena
  | IGsoLevelOrmronGarden
  | IGsoLevelOrmronGazebo;

export type IConnectionLevel =
  | IGsoLevelOrmronStreetConnections
  | IGsoLevelOrmronArenaConnections
  | IGsoLevelOrmronGardenConnections
  | IGsoLevelOrmronGazeboConnections;

export type INPCLevel =
  | IGsoLevelOrmronStreetNPCs
  | IGsoLevelOrmronArenaNPCs
  | IGsoLevelOrmronGardenNPCs
  | IGsoLevelOrmronGazeboNPCs;
