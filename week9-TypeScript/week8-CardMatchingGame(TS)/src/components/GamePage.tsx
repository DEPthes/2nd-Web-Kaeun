import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";
import "./GamePage.css";
import { AiFillHome } from "react-icons/ai";

type CardItem = {
  index: number;
  value: number;
  visible: boolean;
};

const GamePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [remaining, setRemaining] = useState<number>(location.state?.num); //남은 개수
  const [count, setCount] = useState(0); //총 시도 횟수
  const [flippedCards, setFlippedCards] = useState<CardItem[]>([]); //뒤집힌 카드
  const [copyArray, setCopyArray] = useState<CardItem[]>(location.state?.array); //카드 배열

  const handleCardFlip = (index: number, value: number) => {
    if (flippedCards.length === 0) {
      //뒤집힌 카드가 없으면 첫 번째 카드 선택
      setFlippedCards([{ index, value, visible: true }]); //flippedCards에 첫 번째 카드 저장
    } else if (flippedCards.length === 1) {
      //뒤집힌 카드가 하나 있으면 두 번째 카드 선택
      const firstCard = flippedCards[0];
      if (firstCard.index !== index) {
        //첫 번째 선택한 카드와 두 번째 선택한 카드가 다른 경우
        setFlippedCards((prevCards) => [
          ...prevCards,
          { index, value, visible: true },
        ]); //flippedCards에 두 번째 카드 저장
        setCount((prevCount) => prevCount + 1); //총 시도 횟수 1 증가
        setTimeout(() => {
          //1초 후에 카드들을 다시 뒤집음
          const secondCard = { index, value, visible: true };
          if (firstCard.value === secondCard.value) {
            //첫 번째 선택 카드와 두 번째 선택 카드의 숫자가 같으면 visible을 false로 바꿈
            copyArray[firstCard.index].visible = false;
            copyArray[secondCard.index].visible = false;
            setCopyArray(copyArray);
            setRemaining((prevRemaining) => prevRemaining - 1); //남은 개수 1 감소
          }
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  //Home 버튼 누르면 초기화면으로 이동
  const HomeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <AiFillHome
        className="home"
        size="40"
        color="rgb(202, 159, 159)"
        onClick={HomeHandler}
      />
      <div className="game">
        <div>
          <h3>남은 개수: {remaining}쌍</h3>
          <h3>총 시도 횟수: {count}번</h3>
        </div>
        <div className="cards">
          {copyArray.map((num, index) => (
            <Card
              key={index}
              num={num.value}
              onClick={() => handleCardFlip(index, num.value)}
              isFlipped={flippedCards.some((card) => card.index === index)}
              visible={num.visible}
            >
              {num.value}
            </Card>
          ))}
        </div>
      </div>
      {remaining === 0 && (
        <div className="modal">
          <h2>
            축하합니다.
            <br />
            무려 {count}번 만에 게임을 끝내셨군요!
          </h2>
        </div>
      )}
    </>
  );
};

export default GamePage;
