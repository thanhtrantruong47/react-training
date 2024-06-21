import { useRef } from "react";

const CatFriends = () => {
  const listRef = useRef(document.createElement("ul"));

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index];

    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img
              src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-thien-nhien-3d-002.jpg"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-thien-nhien-3d-003.jpg"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-thien-nhien-3d-004.jpg"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CatFriends;
