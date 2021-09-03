import IOwer from "./IOwer";
import IEventParticipant from "./IEventParticipant";

export default interface IEventShortData {
  id: string,
  title: string,
  creator: IEventParticipant,
  costs_data: IOwer[]
}