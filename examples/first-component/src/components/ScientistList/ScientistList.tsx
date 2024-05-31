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
        <Scientist key={scientist.id} scientist={scientist} />
      ))}
    </>
  );
};

export default ScientistList;
