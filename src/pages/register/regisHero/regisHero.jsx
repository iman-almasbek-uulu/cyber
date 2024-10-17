import React from "react";
import s from "./regisHero.module.css"
const RegisHero = () => {
  return (
    <div className={s.video}>
      <video autoPlay muted loop id={s.bgVideo}>
        <source src="/bg2.mp4" type="video/mp4" />
      </video>
      <div className={s.content}>
        <div className="container">
          <h1>Hurry up to sign up for the event</h1>
          <p className="text-center fs-4 p-3">
            2/8/24 <br />
            The registration ends in:
          </p>
          <div className={s.times}>
            <div className={s.item}>
              <p className={s.num}>00</p>
              <p>days</p>
            </div>
            <div className={s.item}>
              <p className={s.num}>00</p>
              <p>hours</p>
            </div>
            <div className={s.item}>
              <p className={s.num}>00</p>
              <p>minutes</p>
            </div>
            <div className={s.item}>
              <p className={s.num}>00</p>
              <p>seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisHero;
