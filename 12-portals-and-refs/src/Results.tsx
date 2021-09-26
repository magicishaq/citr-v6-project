<<<<<<< HEAD:12-portals-and-refs/src/Results.tsx
import Pet from "./Pet";
import { FunctionComponent } from "react";
import { Pet as PetType } from "./APIResponsesTypes"; //renaming the import
=======
import Pet from './Pet'
>>>>>>> 22a8fbb4d38613b0822ec4e88a0b72733ba0f6b4:12-portals-and-refs/src/Results.js

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div className="search grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          )
        })
      )}
    </div>
  )
}

export default Results
