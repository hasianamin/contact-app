export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  phones: PhoneNumber[];
}

export interface PhoneNumber {
  number: string;
  id: number;
}
