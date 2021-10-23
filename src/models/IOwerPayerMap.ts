import IOwer from "./IOwer";
import IEventParticipant from "./IEventParticipant";

export default interface IOwerPayerMap {
  payer: IEventParticipant,
  owersList: IOwer[]
}