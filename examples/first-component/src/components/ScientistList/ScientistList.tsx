// https://react.dev/learn/passing-props-to-a-component#challenges

import Person from "../../types/Person";
import Scientist from "../Scientist/Scientist";

interface ScientistsProps {
  scientists: Person[];
}

const ScientistList = ({ scientists }: ScientistsProps) => {
  return (
    <>
      {scientists.map((scientist) => (
        <Scientist
          key={scientist.id}
          imageId={scientist.imageId}
          name={scientist.name}
          profession={scientist.profession}
          awards={scientist.awards}
          discoveries={scientist.discoveries}
          imageSize={70}
        />
      ))}
    </>
  );
};

export default ScientistList;
