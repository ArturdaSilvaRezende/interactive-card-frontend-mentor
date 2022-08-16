import { useCallback, useEffect, useRef } from "react";
import * as C from "./style/style";
import IconComplete from "./img/icon-complete.svg";

export const CompleteCard = () => {
  const cardComplete = useRef<HTMLDivElement | null>(null);
  const formInteractive = document.getElementById(
    "formInteractive"
  ) as HTMLFormElement | null;

  const showForm = useCallback(() => {
    if (formInteractive && cardComplete.current !== null) {
      cardComplete.current.style.display = "none";
      formInteractive.classList.remove("zoomOut");
      formInteractive.style.display = "block";
      formInteractive.input.value = "";
    }
  }, [formInteractive]);

  return (
    <C.cardComplete id="cardComplete" ref={cardComplete}>
      <figure>
        <img src={IconComplete} alt="Icon Complete" />

        <figcaption>
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
          <button type="button" onClick={showForm}>
            Continue
          </button>
        </figcaption>
      </figure>
    </C.cardComplete>
  );
};
