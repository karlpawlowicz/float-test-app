export type DateTimeString = string;

export type Tag = string;

export type Team = string;

export type Transaction = {
  date: DateTimeString;
  amountInCents: number;
  tags: Tag[];
  teams: Team[];
};
