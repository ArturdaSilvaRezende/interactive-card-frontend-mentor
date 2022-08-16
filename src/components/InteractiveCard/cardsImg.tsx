import * as C from "./style/style";
import BgCardBack from "./img/bg-card-back.png";
import BgCardFront from "./img/bg-card-front.png";
import { useForm } from "../../shared/contexts/contextForm";

export const CardsImages = () => {
  const { inputName, inputNumberCard, inputMM, inputYY, inputCVC } = useForm();
  return (
    <C.CardsImages>
      <C.CardBackFigure>
        <img src={BgCardBack} alt="background card back" />
        <figcaption>
          <p>{inputCVC.length === 0 ? "000" : inputCVC}</p>
        </figcaption>
      </C.CardBackFigure>

      <C.CardFrontFigure>
        <img src={BgCardFront} alt="background card front" />
        <div>
          <p></p>
          <p></p>
        </div>
        <figcaption>
          <p>
            {inputNumberCard.length === 0
              ? "0000 0000 0000 0000"
              : inputNumberCard}
          </p>
          <p>
            <span>
              {inputName.length === 0
                ? "Jane Appleseed"
                : inputName.toLocaleUpperCase()}
            </span>
            <span>
              {inputMM.length === 0 ? "00" : inputMM}/
              {inputYY.length === 0 ? "00" : inputYY}
            </span>
          </p>
        </figcaption>
      </C.CardFrontFigure>
    </C.CardsImages>
  );
};
