<<<<<<< HEAD:12-portals-and-refs/src/Pet.tsx
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";

interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet: FunctionComponent<IProps> = (props) => {
  const { name, animal, breed, images, location, id } = props;
=======
import { Link } from 'react-router-dom'

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props
>>>>>>> 22a8fbb4d38613b0822ec4e88a0b72733ba0f6b4:12-portals-and-refs/src/Pet.js

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg'
  if (images.length) {
    hero = images[0]
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className=" ">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 rounded ">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet
