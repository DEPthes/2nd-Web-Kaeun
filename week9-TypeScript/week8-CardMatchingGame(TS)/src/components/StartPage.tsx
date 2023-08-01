import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

type Card = {
  value: number;
  visible: boolean;
};

const StartPage: React.FC = () => {
  const [num, setNum] = useState("");
  const [array, setArray] = useState<Card[]>([]);
  const navigate = useNavigate();

  //array의 숫자들 랜덤하게 섞기
  const shuffle = (array: Card[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const StartHandler = () => {
    //입력받은 숫자가 1보다 작거나 20보다 크면 경고 알림, 입력받은 숫자 초기화
    if (+num > 20 || +num < 1) {
      //+ 단항 연산자를 사용해서 문자열을 숫자로 변환
      alert("1부터 20까지 숫자만 가능합니다.");
      setNum("");
    } else {
      //그렇지 않으면 배열에 입력받은 수 만큼의 쌍 넣기
      for (let i = 1; i <= +num; i++) {
        array.push({ value: i, visible: true });
        array.push({ value: i, visible: true });
      }
      shuffle(array);
      setArray(array);
      navigate("/game", {
        state: {
          num: +num,
          array,
        },
        replace: true,
      });
    }
  };

  //enter 키 눌렀을 때도 시작되게 함
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      StartHandler();
    }
  };

  return (
    <div className="startpage">
      <div className="text">카드 개수 선택</div>
      <div className="text">
        <input
          type="number"
          min="1"
          max="20"
          onChange={(event) => setNum(event.target.value)}
          onKeyPress={handleOnKeyPress}
          value={num}
        />
        쌍
      </div>
      <button onClick={StartHandler}>시작</button>
    </div>
  );
};

export default StartPage;
