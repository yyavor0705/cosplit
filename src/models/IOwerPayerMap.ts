import IEventParticipant from "./IEventParticipant";

export default interface IOwerPayerMap {
  payer: IEventParticipant,
  owersMap: {
    ower: IEventParticipant,
    amount: number
  }[]
}