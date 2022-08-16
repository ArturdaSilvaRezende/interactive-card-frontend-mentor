import { useCallback, useEffect, useRef } from "react";
import { CompleteCard } from "./cardComplete";
import * as C from "./style/style";
import { useForm } from "../../shared/contexts/contextForm";

type testNumber = React.KeyboardEvent<HTMLInputElement>;

export const CardForm = () => {
  const {
    inputName,
    inputNumberCard,
    inputMM,
    inputYY,
    inputCVC,
    setInputName,
    setInputNumberCard,
    setInputMM,
    setInputYY,
    setInputCVC,
  } = useForm();

  const itemSelected = document.getElementById(
    "selectItem"
  ) as HTMLSelectElement | null;

  const InputNameRef = useRef<HTMLInputElement | null>(null);
  const InputNameValidation = useRef<HTMLParagraphElement | null>(null);

  const InputNumberCardRef = useRef<HTMLInputElement | null>(null);
  const InputNumberCardValidation = useRef<HTMLParagraphElement | null>(null);

  const InputMMRef = useRef<HTMLInputElement | null>(null);
  const InputYYRef = useRef<HTMLInputElement | null>(null);
  const InputDateValidation = useRef<HTMLParagraphElement | null>(null);

  const InputCVCRef = useRef<HTMLInputElement | null>(null);
  const InputCVCValidation = useRef<HTMLParagraphElement | null>(null);

  const FormRef = useRef<HTMLFormElement | null>(null);

  const cardComplete = document.getElementById(
    "cardComplete"
  ) as HTMLDivElement | null;

  const selectItem = useCallback(() => {
    if (itemSelected !== null) {
      if (itemSelected.options[itemSelected.selectedIndex].value === "0") {
        itemSelected.classList.remove("colorChecked");
        itemSelected.classList.add("colorDefault");
      } else {
        itemSelected.classList.remove("colorDefault");
        itemSelected.classList.add("colorChecked");
      }
    }
  }, [itemSelected]);

  useEffect(() => {
    window.addEventListener("change", selectItem);
    return () => window.removeEventListener("change", selectItem);
  }, [itemSelected, selectItem]);

  const testNumber = useCallback((event: testNumber) => {
    if (!/[ 0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }, []);

  const handleReset = useCallback(() => {
    //input name validation
    if (InputNameRef.current !== null && InputNameValidation.current !== null) {
      setInputName("");
      InputNameRef.current.value = "";
      InputNameRef.current.style.border = "1px solid hsl(270, 3%, 87%)";
      InputNameValidation.current.style.display = "none";
    }

    //input numberCard validation
    if (
      InputNumberCardRef.current !== null &&
      InputNumberCardValidation.current !== null
    ) {
      setInputNumberCard("");
      InputNumberCardRef.current.value = "";
      InputNumberCardRef.current.style.border = "1px solid hsl(270, 3%, 87%)";
      InputNumberCardValidation.current.innerHTML = "";
      InputNumberCardValidation.current.style.display = "none";
    }

    //input MM validation
    if (InputMMRef.current !== null && InputDateValidation.current !== null) {
      setInputMM("");
      InputMMRef.current.value = "";
      InputMMRef.current.style.border = "1px solid hsl(270, 3%, 87%)";
      InputDateValidation.current.style.display = "none";
    }

    //input YY validation
    if (InputYYRef.current !== null && InputDateValidation.current !== null) {
      setInputYY("");
      InputYYRef.current.value = "";
      InputYYRef.current.style.border = "1px solid hsl(270, 3%, 87%)";
      InputDateValidation.current.style.display = "none";
    }

    //input CVC validation
    if (InputCVCRef.current !== null && InputCVCValidation.current !== null) {
      setInputCVC("");
      InputCVCRef.current.value = "";
      InputCVCRef.current.style.border = "1px solid hsl(270, 3%, 87%)";
      InputCVCValidation.current.style.display = "none";
    }
  }, [setInputName, setInputNumberCard, setInputMM, setInputYY, setInputCVC]);

  const validationInputs = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      //input name validation
      if (
        InputNameRef.current !== null &&
        InputNameValidation.current !== null
      ) {
        if (inputName.length === 0) {
          InputNameRef.current.style.border = "1px solid hsl(0, 100%, 66%)";
          InputNameValidation.current.style.display = "block";
          return false;
        }
      }

      //input numberCard validation
      if (
        InputNumberCardRef.current !== null &&
        InputNumberCardValidation.current !== null
      ) {
        if (inputNumberCard.length === 0) {
          InputNumberCardRef.current.style.border =
            "1px solid hsl(0, 100%, 66%)";
          InputNumberCardValidation.current.style.display = "block";
          return false;
        }
        // if (inputNumberCard.valueOf().match(/[aA-zZ]+/) !== null) {
        //   InputNumberCardValidation.current.innerHTML =
        //     "Wrong format, numbers only";
        //   return false;
        // }
      }

      //input MM validation
      if (InputMMRef.current !== null && InputDateValidation.current !== null) {
        if (inputMM.length === 0) {
          InputMMRef.current.style.border = "1px solid hsl(0, 100%, 66%)";
          InputDateValidation.current.style.display = "block";
          return false;
        }
      }

      //input YY validation
      if (InputYYRef.current !== null && InputDateValidation.current !== null) {
        if (inputYY.length === 0) {
          InputYYRef.current.style.border = "1px solid hsl(0, 100%, 66%)";
          InputDateValidation.current.style.display = "block";
          return false;
        }
      }

      //input CVC validation
      if (InputCVCRef.current !== null && InputCVCValidation.current !== null) {
        if (inputCVC.length === 0) {
          InputCVCRef.current.style.border = "1px solid hsl(0, 100%, 66%)";
          InputCVCValidation.current.style.display = "block";
          return false;
        }
      }

      //handle function
      if (FormRef.current !== null && cardComplete) {
        FormRef.current.classList.add("zoomOut");

        setTimeout(() => {
          if (FormRef.current !== null) {
            FormRef.current.style.display = "none";
          }
        }, 1100);

        setTimeout(() => {
          cardComplete.style.display = "block";
        }, 1000);
      }

      handleReset();
    },

    [
      inputName,
      inputNumberCard,
      inputYY,
      inputMM,
      inputCVC,
      cardComplete,
      handleReset,
    ]
  );

  return (
    <>
      <C.FormContainer
        onSubmit={validationInputs}
        ref={FormRef}
        id="formInteractive"
      >
        {/* Input - Name */}
        <div className="form__item">
          <label htmlFor="InputName">Cardholder Name</label>
          <input
            id="InputName"
            type="text"
            value={inputName}
            maxLength={20}
            minLength={10}
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setInputName(e.target.value)}
            onKeyPress={(event) => {
              if (!/[ A-Za-z]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            ref={InputNameRef}
          />
          <p ref={InputNameValidation}>Can´t be black</p>
        </div>

        {/* Input - Number  */}
        <div className="form__item">
          <label htmlFor="InputNumberCard">Card Number</label>
          <input
            id="InputNumberCard"
            value={inputNumberCard}
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={16}
            minLength={16}
            onChange={(e) => setInputNumberCard(e.target.value)}
            onKeyPress={testNumber}
            ref={InputNumberCardRef}
          />
          <p ref={InputNumberCardValidation}>Can´t be black</p>
        </div>

        {/* Input - Date / CVC  */}
        <div className="form__additional">
          <div className="form__labels">
            <label>Exp. Date (MM/YY)</label>
            <label htmlFor="InputCVC">CVC</label>
          </div>

          <div className="form__inputs">
            <input
              type="text"
              placeholder="MM"
              id="inputMM"
              maxLength={2}
              minLength={2}
              value={inputMM}
              onChange={(e) => setInputMM(e.target.value)}
              onKeyPress={testNumber}
              ref={InputMMRef}
            />

            <input
              type="text"
              placeholder="YY"
              id="inputYY"
              maxLength={2}
              minLength={2}
              value={inputYY}
              onChange={(e) => setInputYY(e.target.value)}
              onKeyPress={testNumber}
              ref={InputYYRef}
            />
            <input
              id="InputCVC"
              type="text"
              value={inputCVC}
              maxLength={3}
              minLength={3}
              placeholder="e.g. 123"
              onChange={(e) => setInputCVC(e.target.value)}
              onKeyPress={testNumber}
              ref={InputCVCRef}
            />
          </div>
          <div className="additional__validation">
            <p ref={InputDateValidation}>Can´t be black</p>
            <p ref={InputCVCValidation}>Can´t be black</p>
          </div>
        </div>

        <button type="submit">Confirm</button>
      </C.FormContainer>
      <CompleteCard />
    </>
  );
};
