import IEventParticipant from "./IEventParticipant";

export default interface IOwer {
  participant: IEventParticipant,
  costs: number
}