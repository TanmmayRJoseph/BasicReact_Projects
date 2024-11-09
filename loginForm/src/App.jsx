import "./App.css";
import { useForm } from "react-hook-form";
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 2000); // Simulate a 2-second delay
    });
  };

  // const onSubmit = (data) => console.log(data);

  return (
    <div className="form">
      <form className="form2" onSubmit={handleSubmit(onSubmit)}>
        <h3>Basic form Validation</h3>
        {isSubmitting && <div>Loading..</div>}
        <div className="input-group">
          <label>First name</label>
          <input
            {...register("username", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 3, message: "minimum length is 3" },
              maxLength: { value: 10, message: "max length should be 10" },
            })}
            type="text"
          />
          {errors.username && (
            <div className="inside-div">{errors.username.message}</div>
          )}
        </div>
        <div className="input-group">
          <label>Last name</label>
          <input
            {...register("lastname", {
              minLength: { value: 3, message: "minimum length is 3" },
              maxLength: { value: 10, message: "max length should be 10" },
            })}
            type="text"
          />
          {errors.lastname && (
            <div className="inside-div">{errors.lastname.message}</div>
          )}
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            {...register("email", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            type="email"
          />
          {errors.email && (
            <div className="inside-div">{errors.email.message}</div>
          )}
        </div>
        <div className="input-group">
          <label>Phone No.</label>
          <input
            {...register("phoneno", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 10, message: "minimum length is 10" },

              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid phone number",
              },
            })}
            type="tel"
          />
          {errors.phoneno && (
            <div className="inside-div">{errors.phoneno.message}</div>
          )}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            {...register("password", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 8, message: "minimum length is 8" },
              maxLength: { value: 20, message: "max length should be 20" },
            })}
            type="password"
          />
          {errors.password && (
            <div className="inside-div">{errors.password.message}</div>
          )}
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            {...register("confirmpassword", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 8, message: "minimum length is 8" },
              maxLength: { value: 20, message: "max length should be 20" },
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            type="password"
          />
          {errors.confirmpassword && (
            <div className="inside-div">{errors.confirmpassword.message}</div>
          )}
        </div>
        <div className="input-group">
          <label>Age</label>
          <input
            {...register("age", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 1, message: "minimum length is 1" },
              maxLength: { value: 2, message: "max length should be 2" },
              validate: (value) =>
                value >= 18 || "You must be at least 18 years old",
            })}
            type="number"
          />
          {errors.age && <div className="inside-div">{errors.age.message}</div>}
        </div>
        <div className="submit">
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
