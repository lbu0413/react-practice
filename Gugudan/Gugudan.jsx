const React = require('react')
const { useState, useRef } = React;


const Gugudan = () => {
    // useState hook은 함수형 컴포넌트안에 넣어줘야한다.
    // Hooks 컴포넌트 안의 setState 함수들은 비동기이다.
    // class 컴포넌트의 setState는 한번 실행될때 렌더링이 계속 되는 반면
    // Hooks 컴포넌트의 setState 함수들은 비동기로 모아서 한번에 렌더링 한다.
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(
        Math.ceil(Math.random() * 9)
    );
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const inputRef = useRef(null);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult(value + " 정답!");
        } else {
            setResult("땡!");
        }
        setValue("");
        inputRef.current.focus();
    };

    return (
        <div>
            <div>
                {first} 곱하기 {second}는?
            </div>
            <form onSubmit={onSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
                <button type="submit">입력!</button>
            </form>
            <div>{result}</div>
        </div>
    );
};

module.exports = Gugudan;