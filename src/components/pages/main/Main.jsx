import React from "react";
import "./main.css";
import Ram from "./horizontally-centered-vertical-decoration.png";
import Vid from "./na1.mp4";

function Main() {
  return (
    <>
      <div class="body">
        <div className="fon">
          <video autoPlay muted loop src={Vid} alt=""></video>
        </div>
        <div class="outer-border">
          <div class="mid-border">
            <div class="inner-border">
              <img class="vertical-decoration top" src={Ram} alt=""></img>
              <img class="vertical-decoration bottom" src={Ram} alt=""></img>

              <div class="container">
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <p>
                      Мы рады сообщить Вам, что 10 июня 2024г. открылся бассейн
                      по адресу: ул. Старобельская, 16
                      <br />
                      Вход в бассейн свободный для родстенников.
                      <br />
                      <span className="p">
                        Подробное описание смотри в меню!
                      </span>
                      <br />
                      Справки по телефону мамы (Для Насти - аккаунт Антона VK)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
