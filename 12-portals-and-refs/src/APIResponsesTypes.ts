export type Animal = "dog" | "bird" | "cat" | "reptile" | "rabbit";

export interface Pet {
  id: number;
  name: string; //name of pet
  animal: Animal; //animal
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
  color?: string; //optional the questionmark
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNextL: boolean; //
  pets: Pet[];
}

export interface BreedListAPIResponse {
  animal: Animal;
  breeds: string[];
}
