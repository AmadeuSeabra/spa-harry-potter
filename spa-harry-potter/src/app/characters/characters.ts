export type Characters = Characters1[]

export interface Characters1 {
  id: string
  name: string
  alternate_names: string[]
  species: string
  gender: string
  house: string
  dateOfBirth?: string
  yearOfBirth?: number
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: Wand
  patronus: string
  hogwartsStudent: boolean
  hogwartsStaff: boolean
  actor: string
  alternate_actors: string[]
  alive: boolean
  image: string
}

export interface Wand {
  wood: string
  core: string
  length?: number
}
