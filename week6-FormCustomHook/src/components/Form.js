import useInput from "../hooks/use-input";

//const isNotEmpty = (value) => value.trim() !== "";
//const isLength = (value) => value.trim().length > 7;
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: idValue,
    isValid: idIsValid,
    hasError: idHasError,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
    reset: resetID,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) =>
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(value)
  );

  const {
    value: pwconfirmValue,
    isValid: pwconfirmIsValid,
    hasError: pwconfirmHasError,
    valueChangeHandler: pwconfirmChangeHandler,
    inputBlurHandler: pwconfirmBlurHandler,
    reset: resetPwconfirm,
  } = useInput((value) => value === passwordValue);

  let formIsValid = false;

  if (idIsValid && passwordIsValid && pwconfirmIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(idValue, passwordValue, pwconfirmValue);

    resetID();
    resetPassword();
    resetPwconfirm();
  };

  const idClasses = idHasError ? "form-control invalid" : "form-control";

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  const pwconfirmClasses = pwconfirmHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={idClasses}>
          <label htmlFor="email">아이디</label>
          <input
            type="email"
            id="email"
            placeholder="text@naver.com"
            value={idValue}
            onChange={idChangeHandler}
            onBlur={idBlurHandler}
          />
          {idHasError && (
            <p className="error-text">이메일 형식이 잘못되었습니다.</p>
          )}
        </div>
        <div className={passwordClasses}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className="error-text">
              비밀번호는 숫자, 영문자, 특수문자 조합으로 8자 이상이어야 합니다.
            </p>
          )}
        </div>
        <div className={pwconfirmClasses}>
          <label htmlFor="passwordconfirm">비밀번호 확인</label>
          <input
            type="password"
            id="passwordconfirm"
            value={pwconfirmValue}
            onChange={pwconfirmChangeHandler}
            onBlur={pwconfirmBlurHandler}
          />
          {pwconfirmHasError && (
            <p className="error-text">비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>가입</button>
      </div>
    </form>
  );
};

export default BasicForm;
