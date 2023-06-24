import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>가뿡마켓에 오신 걸 환영합니다</h2>
      <p>가뿡마켓은 다양한 과자와 아이스크림, 라면을 판매하는 마켓입니다 :)</p>
    </section>
  );
};

export default MealsSummary;
