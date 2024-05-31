// https://react.dev/learn/passing-props-to-a-component#challenges

import Person from "../../types/Person";

interface ScientistProps {
  scientist: Person;
}

const Scientist = ({ scientist }: ScientistProps) => {
  const { imageId, name, profession, awards, discoveries, imageSize } =
    scientist;
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageId}
        alt="Maria Skłodowska-Curie"
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: 4 </b>({awards})
        </li>
        <li>
          <b>Discovered: </b>
          {discoveries}
        </li>
      </ul>
    </section>
  );
};

export default Scientist;
