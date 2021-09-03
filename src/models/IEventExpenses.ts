import IEventParticipant from "./IEventParticipant";

export default interface IEventExpenses {
  id: string,
  payer: IEventParticipant,
  target: string,
  amount: number
}