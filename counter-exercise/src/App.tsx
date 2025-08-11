import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (): void => {
    try {
      setCounter(() => counter + 1);
    } catch (error) {
      console.log(error);
      throw new Error("Function not implemented.");
    }
  }



  return (
    <>
      <div className="main">
        <div className="value">
          {counter}
        </div>
        <div className="buttons">
          <button className="increase"
            onClick={handleIncrement}
          >Increment</button>

        </div>
      </div>
    </>
  )
}