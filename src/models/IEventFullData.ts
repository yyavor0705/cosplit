import IEventParticipant from "./IEventParticipant";

export default interface IEventFullData {
  id: string,
  title: string,
  creator: IEventParticipant,
}