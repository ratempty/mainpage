import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xrgwqdwp");
  const inputRef = useRef();
  const areaRef = useRef();
  if (state.succeeded) {
    alert("이메일이 발송 되었습니다.");
    return <p> 의견을 보내주셔서 감사합니다. </p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="회신받을 이메일을 작성해주세요"
        ref={inputRef}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="의견을 작성해주세요"
        ref={areaRef}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        보내기
      </button>
    </form>
  );
}

export default Form;
