// https://react.dev/learn/passing-props-to-a-component#challenges

interface ScientistProps {
  imageId: string;
  name: string;
  profession: string;
  awards: string;
  discoveries: string;
  imageSize: number;
}

const Scientist = ({
  imageId,
  name,
  profession,
  awards,
  discoveries,
  imageSize,
}: ScientistProps) => {
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
