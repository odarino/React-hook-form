import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function App() {
  const { register, errors, handleSubmit, watch } = useForm({});
  const watchedPassword = watch("password", "");

  console.log(watchedPassword);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Password</label>
      <input
        name="password"
        type="text"
        ref={register({
          required: "You must specify a password",
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Repeat password</label>
      <input
        name="password_repeat"
        type="text"
        ref={register({
          validate: (value) =>
            value === watchedPassword || "The passwords do not match",
        })}
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

      {watchedPassword === "123" && <div style={{ color: "white" }}>hehe</div>}
      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
