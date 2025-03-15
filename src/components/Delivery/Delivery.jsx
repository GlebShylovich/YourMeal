import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { emptyBasket } from "../../redux/reducers/basketSlice";
import { addOrder } from "../../redux/reducers/orderSlice";
import donut from "/img/pic.png";
import close from "/close.svg";
import "./Delivery.scss";

export default function Delivery({ closeDelivery, total }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const deliveryType = watch("deliveryType", "Delivery");

  const onSubmitHandler = (data) => {
    dispatch(
      addOrder({
        ...data,
        date: Date.now(),
        total,
      })
    );
    dispatch(emptyBasket());
    setTimeout(() => closeDelivery(false), 2000);
  };

  return (
    <div className="delivery__overlay">
      <div className="delivery">
        <img
          className="delivery__close"
          onClick={() => closeDelivery(false)}
          src={close}
          alt="close"
        />
        <div className="delivery__image">
          <img src={donut} alt="donut" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="delivery__form"
        >
          <div className="delivery__form-body">
            <h1 className="delivery__title">{deliveryType}</h1>
            <div className="delivery__input-wrapper">
              <label
                className={`delivery__label ${
                  errors.username && "delivery__label--error"
                }`}
              >
                {errors.username ? errors.username.message : "Name"}
              </label>
              <input
                className={`delivery__input ${
                  errors.username ? "delivery__input--error" : ""
                }`}
                type="text"
                {...register("username", {
                  required: "Username is required",
                  maxLength: { value: 20, message: "Max length is 20" },
                  minLength: { value: 3, message: "Min length is 3" },
                })}
              />
            </div>
            <div className="delivery__input-wrapper">
              <label
                className={`delivery__label ${
                  errors.number && "delivery__label--error"
                }`}
              >
                {errors.number ? errors.number.message : "Number"}
              </label>
              <input
                className={`delivery__input ${
                  errors.number ? "delivery__input--error" : ""
                }`}
                type="tel"
                {...register("number", {
                  required: "Number is required",
                  pattern: { value: /^\d{10,15}$/, message: "Invalid number" },
                })}
              />
            </div>

            <label htmlFor="deliveryType">
              <input
                type="radio"
                value="Pickup"
                {...register("deliveryType")}
              />
              Pickup
            </label>
            <label htmlFor="deliveryType">
              <input
                type="radio"
                value="Delivery"
                {...register("deliveryType")}
              />
              Delivery
            </label>

            {deliveryType === "Delivery" && (
              <>
                <div className="delivery__input-wrapper">
                  <label
                    className={`delivery__label ${
                      errors.address && "delivery__label--error"
                    }`}
                  >
                    {errors.address ? errors.address.message : "Address"}
                  </label>
                  <input
                    className={`delivery__input ${
                      errors.address ? "delivery__input--error" : ""
                    }`}
                    type="text"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                </div>
                <div className="delivery__input-wrapper">
                  <label
                    className={`delivery__label ${
                      errors.floor && "delivery__label--error"
                    }`}
                  >
                    {errors.floor ? errors.floor.message : "Floor"}
                  </label>
                  <input
                    className={`delivery__input ${
                      errors.floor ? "delivery__input--error" : ""
                    }`}
                    type="text"
                    {...register("floor", {
                      required: "Floor is required",
                      pattern: { value: /^\d{1,3}$/, message: "Invalid floor" },
                    })}
                  />
                </div>
              </>
            )}
          </div>
          <button type="submit" className="delivery__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
