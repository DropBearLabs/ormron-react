import { IPartyMember, MainCharacters } from "../types/TypeCharacters";
export const allParty: IPartyMember[] = [
  {
    id: MainCharacters.grey,
    name: "Grey",
    image: "temp-main4.png",
    placeholder: "temp-main4black.png",
    selected: "temp-main4selected.png",
    spellBackground: "temp-spell-back5.png",
    opened: false
  },
  {
    id: MainCharacters.dart,
    name: "Dart",
    image: "temp-main5.png",
    placeholder: "temp-main5black.png",
    selected: "temp-main5selected.png",
    opened: false,
    spellBackground: "temp-spell-back4.png"
  },
  {
    id: MainCharacters.maya,
    name: "Maya",
    image: "temp-main1.png",
    placeholder: "temp-main1black.png",
    selected: "temp-main1selected.png",
    opened: true,
    spellBackground: "temp-spell-back1.png"
  },
  {
    id: MainCharacters.nell,
    name: "Nell",
    image: "temp-main2.png",
    placeholder: "temp-main2black.png",
    selected: "temp-main2selected.png",
    opened: false,
    spellBackground: "temp-spell-back3.png"
  },
  {
    id: MainCharacters.tara,
    name: "Tara",
    image: "temp-main3.png",
    placeholder: "temp-main3black.png",
    selected: "temp-main3selected.png",
    opened: false,
    spellBackground: "temp-spell-back2.png"
  }
];
