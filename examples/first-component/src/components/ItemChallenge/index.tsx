// ItemChallenge

interface ItemProps {
  name: string;
  importance: number;
}

const ItemChallenge = ({ name, importance }: ItemProps) => {
  return (
    <li className="item">
      {name} {importance > 5 && <i>(importance {importance})</i>}
    </li>
  );
};

const PackingListChallenge = () => {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <ItemChallenge importance={9} name="Space suit" />
        <ItemChallenge importance={0} name="Helmet with a golden leaf" />
        <ItemChallenge importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
};

export default PackingListChallenge;
