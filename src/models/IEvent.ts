import IOwer from "./IOwer";

export default interface IEvent {
  id: string,
  title: string,
  costs_data: IOwer[]
}