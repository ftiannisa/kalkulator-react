import { useState } from "react";
import Title from "../components/Title";
import Tombol from "../components/Tombol";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [output, setOutput] = useState(null);

  const createPrivateCounter = () => {
    return {
      increment: function () {
        setCount(count + 1);
      },
      decrement: function () {
        setCount(count - 1);
      },
      getValue: function () {
        setOutput(<div className="output">{count}</div>);
      },
    };
  };

  const counter = createPrivateCounter();

  return (
    <>
      <Title id="Counter_Closure">Counter Closure</Title>
      <div className="content">
        <p className="desc">Counter dengan metode increment dan decrement</p>

        <Tombol text="increment" onclick={counter.increment} />
        <Tombol text="decrement" onclick={counter.decrement} />
        <Tombol text="get value" onclick={counter.getValue} />

        <br />
        {output}
      </div>
    </>
  );
}
