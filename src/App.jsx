import "App.css";
import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = function () {
    let temp = "";
    array.forEach((item, index) => {
      temp += `${index}: ${item} `;
    });

    setResult(temp);
  };

  const handleFilter = () => {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = () => {
    const mapped = array.map((item, index) => {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };

  const handleReduce = () => {
    const reduced = array.reduce((acc, cur) => {
      return `${acc} + ${cur}`;
    });

    setResult(reduced);
  };

  const handlePush = () => {
    if (query.length <= 0) {
      alert("추가하시려는 값을 입력해주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    // pop()한 값을 새로운 배열에 저장
    const newArr = [...array];
    newArr.pop();
    console.log(newArr);
    // setArray
    setArray(newArr);
    // array 기반으로 result 생성
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    const sliced = array.slice(1, 4);
    setResult(sliced.join(", "));
  };

  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(1, 1, query);
    setResult(newArr.join(", "));
  };

  const handleIndexOf = () => {
    const indexOf = array.indexOf(query);
    setResult(indexOf);
  };

  const handleIncludes = () => {
    const included = array.includes(query) ? "true" : "false";
    setResult(included);
  };

  const handleFind = () => {
    const found = array.find((item) => item.includes(query));
    console.log(found);
    found !== undefined ? setResult(found) : setResult("Not Found");
  };

  const handleSome = () => {
    // 하나라도 true면 true 반환
    const some = array.some((item) => item.includes(query));
    setResult(String(some));
  };

  const handleEvery = () => {
    // 모든 요소가 true여야 true 반환
    const every = array.every((item) => item.includes(query));
    setResult(String(every));
  };

  const handleSort = () => {
    // 내림차순 정렬
    const sorted = array.sort().reverse();
    setResult(sorted.join(", "));
  };

  const handleJoin = () => {
    setResult(array.join(" / "));
  };

  return (
    <div className="container">
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Enter text"
      />
      <div className="btnBox">
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div className="box">
        <h3>원본 배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div className="box">
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
