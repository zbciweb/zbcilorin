import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form"; 
import { createCTA } from "../../actions/cta";
 
type Inputs = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const dispatch: any = useDispatch();

  const formResp: [] = useSelector((state: any) => state.contactForm)
  console.log(formResp)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
   dispatch(createCTA(data))
    
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form contact__form">
        <div className="row">
          <div className="flex-md-6 ">
            <div className="form__group">
              <label htmlFor="fullName" className="form__label">
                Your Full name <span className="color-danger">*</span>
              </label>
              <input
                className={`form__input ${errors.fullName && "error"}`}
                {...register("fullName", { required: true })}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>

          <div className="flex-md-6 mar-b-sm">
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Your email address <span className="color-danger">*</span>
              </label>
              <input
                className={`form__input ${errors.email && "error"}`}
                {...register("email", { required: true })}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>

          <div className="flex-md-12 mar-b-sm">
            <div className="form__group">
              <label htmlFor="subject" className="form__label">
                Subject <span className="color-danger">*</span>
              </label>
              <input
                {...register("subject", { required: true })}
                className={`form__input ${errors.subject && "error"}`}
                placeholder="Enter your subject"
              />
              {errors.subject && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex-md-12 mar-b-sm">
            <div className="form__group">
              <label htmlFor="message-2" className="form__label">
                Message <span className="color-danger">*</span>
              </label>
              <textarea
                {...register("message", { required: true })}
                className={`form__textarea form__input ${
                  errors.message && "error"
                }`}
                placeholder="Enter your message..."
              ></textarea>
              {errors.message && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>

          <div className="flex-md-12 mar-b-sm text-center">
            <button className="button" type="submit" name="submit">
              Send message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
