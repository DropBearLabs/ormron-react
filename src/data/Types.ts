export type IGso = {
  activeLevel: number,
  infoline: string | null,
  activeDialogue: number | null,
  questsTaken: number[],
  activeQuest: number | null,
  quests: any
  levels: any,
}

export type ILevel = {
	id: string
	connections: IConnection[],
  backgrounds: IBackground[],
  npcs: INpc[],
}

export type IConnection = {
  id: string,
  to: number,
  position: IPoint,
  image: string
}

export type IPoint = {
  x: number,
	y: number
}

export type IBackground = {
  image: string
}

export type INpc = {
  id: string,
  name: string,
  image: string,
  position: IPoint,
  trigger: ITrigger | false,
}

export type ITrigger = {
  dialogueId: number | null,
  triggerType: string
}

export type IDialContinuation = {

}

export type IDialogue = {
  id: string,
  characterId: string,
  image: string,
  lines: string[],
  nextNode?: number | IDialContinuation,
  dialStart?: any,
  dialClear?: any,
  infoline? : string
  questStart?: any
}

export type IQuest = {
  id: string,
  name: string,
  main: boolean,
  steps: IQuestStep[]
}

export type IQuestStep = {
  name: string,
  event: string
}