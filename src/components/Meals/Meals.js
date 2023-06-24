import { Fragment, useState } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import CategorySelector from "./CategorySelector";

const DUMMY_CATEGORY = [
  {
    name: "과자",
    id: "c1",
    DUMMY_FOOD: [
      {
        id: "f1",
        name: "새우깡",
        description: "바삭바삭 농심 새우깡",
        price: 1500,
      },
      {
        id: "f2",
        name: "감자깡",
        description: "감자깡 짭짤하니 맛있다",
        price: 1400,
      },
      {
        id: "f3",
        name: "고구마깡",
        description: "고구마구마고고마구구구마",
        price: 1600,
      },
      {
        id: "f4",
        name: "빼빼로",
        description: "초코 빼빼로 녹차 빼빼로",
        price: 1000,
      },
    ],
  },
  {
    name: "아이스크림",
    id: "c2",
    DUMMY_FOOD: [
      {
        id: "i1",
        name: "구슬 아이스크림",
        description: "동글동글 구슬 아이스크림",
        price: 2500,
      },
      {
        id: "i2",
        name: "바밤바",
        description: "바밤바 밤이 들어있는 바밤바",
        price: 1000,
      },
      {
        id: "i3",
        name: "죠스바",
        description: "죠스바 스윽 꺼내보니 바밤바",
        price: 1500,
      },
      {
        id: "i4",
        name: "돼지바",
        description: "돼지바 지금보니 바밤바",
        price: 1200,
      },
    ],
  },
  {
    name: "라면",
    id: "c3",
    DUMMY_FOOD: [
      {
        id: "r1",
        name: "불닭볶음면",
        description: "매워서 더 맛있는 라면",
        price: 1500,
      },
      {
        id: "r2",
        name: "열라면",
        description: "열라 맛있는 열라면",
        price: 1200,
      },
      {
        id: "r3",
        name: "신라면",
        description: "농~심~ 신라면",
        price: 1000,
      },
    ],
  },
];

const Meals = () => {
  const [selectedCategory, setSelectedCategory] = useState(DUMMY_CATEGORY[0]);

  const categoryChangeHandler = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Fragment>
      <MealsSummary />
      <CategorySelector
        categories={DUMMY_CATEGORY}
        selectedCategory={selectedCategory}
        onCategoryChange={categoryChangeHandler}
      />
      <AvailableMeals
        categories={DUMMY_CATEGORY}
        selectedCategory={selectedCategory}
      />
    </Fragment>
  );
};

export default Meals;
