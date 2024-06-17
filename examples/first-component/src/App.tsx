import "./App.css";
import Profile from "./components/Profile/Profile";
import { Person } from "./types/Person";
import ScientistList from "./components/ScientistList";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter/Counter";

// data for https://react.dev/learn/passing-props-to-a-component#challenges
const PERSON: Person[] = [
  {
    id: "1",
    imageId:
      "https://khunganhonline.com/images/frame/frame_icon/khung-anh-hoa-hinh5aec7498e4003.jpg",
    name: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    awards: `Nobel Prize in Physics,
    Nobel Prize in Chemistry,
    Davy Medal,
    Matteucci Medal`,
    discoveries: "polonium (chemical element)",
    imageSize: 70,
  },
  {
    id: "2",
    imageId:
      "https://khunganhonline.com/images/frame/frame_icon/khung-anh-hoa-hinh5aec7498e4003.jpg",
    name: "Katsuko Saruhashi",
    profession: "geochemist",
    awards: `Miyake Prize for geochemistry, Tanaka Prize`,
    discoveries: "a method for measuring carbon dioxide in seawater",
    imageSize: 70,
  },
];

const App = () => {
  return (
    <>
      <section>
        <Profile />
        <Profile />
        <Profile />
      </section>

      {/* https://react.dev/learn/passing-props-to-a-component#challenges */}
      <div>
        <h1>Notable Scientists</h1>
        {<ScientistList scientists={PERSON} />}
      </div>
      {/* https://react.dev/learn/state-a-components-memory */}
      <div>
        <Gallery />
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
};

export default App;
