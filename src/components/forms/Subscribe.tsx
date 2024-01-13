import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createSubscription } from "../../actions/createSubscriptions";

type Inputs = {
  email: string;
};

const Subscribe = () => {
  const [response, setResponse] = useState('');

  console.log(response)
  
 
  const dispatch: any = useDispatch();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
   dispatch(createSubscription(data))
   .then((response: any) => {
    response.status === 'ok' && setResponse(response.message)
   
   }).catch((e: any) => console.log(e))

   
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="row">
        <div className="flex-md-9">
          <div className="form__group">
            <input
              {...register("email", { required: true })}
              className={`form__input ${errors.email && "error"}`}
              placeholder="Enter your valid email address"
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>

        <div className="flex-md-3">
          <button type="submit" className="button button-block-sm form__submit">
            Subscribe today
          </button>
        </div>
      </div>
      <h3>{response}</h3>
    </form>
  );
};

export default Subscribe;
