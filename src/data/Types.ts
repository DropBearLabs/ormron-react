export type ILevel = {
	id: string
	connections: IConnection[],
  backgrounds: IBackground[],
  npcs: INpc[],
}

export type IConnection = {
  id: string,
  to: string,
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
  state?: string,
}

export type ITrigger = {
  dialogueId: string | null,
  triggerType: string
}

export type IDialContinuation = {

}

export type IDialogue = {
  id: string,
  characterId: string,
  image: string,
  lines: string[],
  nextNode?: string | IDialContinuation,
  postCondition?: string
}