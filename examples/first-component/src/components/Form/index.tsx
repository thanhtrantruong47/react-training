// https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state

import { ChangeEvent, useState } from "react";
const Form = () => {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  };

  const { name, artwork } = person;
  const { title, city, image } = artwork;

  return (
    <>
      <label>
        Name:
        <input value={name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{title}</i>
        {" by "}
        {name}
        <br />
        (located in {city})
      </p>
      <img src={image} alt={title} />
    </>
  );
};

export default Form;
