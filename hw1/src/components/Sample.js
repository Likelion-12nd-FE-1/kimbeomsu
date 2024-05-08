import { useState } from "react";
import "../css/Sample.css";
const stacks_array = [
  {
    name: "React",
    img: process.env.PUBLIC_URL + "/images/React.png",
  },
  {
    name: "Java",
    img: process.env.PUBLIC_URL + "/images/Java.png",
  },
  {
    name: "Kotlin",
    img: process.env.PUBLIC_URL + "/images/Kotlin.png",
  },
  {
    name: "Mysql",
    img: process.env.PUBLIC_URL + "/images/Mysql.png",
  },
  {
    name: "Python",
    img: process.env.PUBLIC_URL + "/images/Python.png",
  },
  {
    name: "Spring",
    img: process.env.PUBLIC_URL + "/images/Spring.png",
  },
  {
    name: "Swift",
    img: process.env.PUBLIC_URL + "/images/Swift.png",
  },
  {
    name: "Vue",
    img: process.env.PUBLIC_URL + "/images/Vue.png",
  },
];

const Sample = () => {
  const [stack, setStack] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = () => {
    const findStack = stacks_array.find((stack) => stack.name === inputText);
    if (findStack) {
      const idx = stacks_array.findIndex((obj) => obj.name === inputText);
      const updatedStack = stack.concat({
        name: stacks_array[idx].name,
        img: stacks_array[idx].img,
      });
      setStack(updatedStack);
      setInputText("");
    } else {
      alert("그 스택은 없어요~");
    }
  };
  const handleRemove = (name) => {
    const updatedStack = stack.filter((s) => s.name !== name);
    setStack(updatedStack);
  };
  const stackList = stack.map((s) => (
    <div className="stack_imgs" onDoubleClick={() => handleRemove(s.name)}>
      <img src={s.img} alt={s.name} />
    </div>
  ));
  return (
    <div>
      <input value={inputText} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
      {stackList}
    </div>
  );
};

export default Sample;
