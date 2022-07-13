import React, { useEffect, useState } from "react";

import { Button } from "codeblynk-react-library";
import "codeblynk-react-library/dist/index.css";

const App = () => {
  let initalState = [243, 45, 23, 97, 3, 50, 35, 5, 10, 40, 32, 77, 91];
  const [sortArr, setSortArr] = useState(
    Array.from(initalState, (x) => {
      return { isSelected: false, num: x };
    })
  );
  const [updated, setUpdated] = useState(false);

  console.log(sortArr, updated);
  return (
    <div className="pt-4 pl-4">
      <Button
        onClick={() => {
          if (updated) {
            setSortArr(
              Array.from(initalState, (x) => {
                return { isSelected: false, num: x };
              })
            );
          } else {
            let arr = sortArr.map((a) => a.num);

            let loopCount = 0;

            for (let i = 1; i < arr.length; i++) {
              let current = arr[i];
              let j = i - 1;
              console.log(loopCount);
              // setTimeout(() => {
              while (j > -1 && current < arr[j]) {
                loopCount += 1;

                // setTimeout(() => {

                // setTimeout(() => {

                // }, 70 * loopCount);
                arr[j + 1] = arr[j];

                j--;
                // }, 70 * loopCount);
              }
              // }, 70 * loopCount * j);

              arr[j + 1] = current;
              setSortArr(
                Array.from(arr, (x, idx) => {
                  return {
                    isSelected: idx === j ? true : false,
                    num: x,
                  };
                })
              );
              // setTimeout(() => {

              // }, 70 * loopCount);
            }
          }
          setUpdated(!updated);
        }}
      >
        {updated ? "Reset" : "Sort"}
      </Button>
      <div>Insertion sort</div>
      <div className="flex space-x-2 h-40">
        {sortArr.map((data, idx) => {
          return (
            <div key={idx}>
              <div>{data.num}</div>
              <div
                style={{ height: data.num / 2 }}
                className={`${
                  data.isSelected ? "bg-secondary " : "bg-black "
                }w-4`}
              >
                {""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
