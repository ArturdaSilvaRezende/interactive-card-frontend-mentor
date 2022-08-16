import React, { createContext, useContext, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Form = {
  inputName: string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;

  inputNumberCard: string;
  setInputNumberCard: React.Dispatch<React.SetStateAction<string>>;

  inputMM: string;
  setInputMM: React.Dispatch<React.SetStateAction<string>>;

  inputYY: string;
  setInputYY: React.Dispatch<React.SetStateAction<string>>;

  inputCVC: string;
  setInputCVC: React.Dispatch<React.SetStateAction<string>>;
};

const DEFAULT_VALUE: Form = {
  inputName: "",
  setInputName: () => {},

  inputNumberCard: "",
  setInputNumberCard: () => {},

  inputMM: "",
  setInputMM: () => {},

  inputYY: "",
  setInputYY: () => {},

  inputCVC: "",
  setInputCVC: () => {},
};

export const FormContext = createContext<Form>(DEFAULT_VALUE);

export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }: Props) => {
  const [inputName, setInputName] = useState("");
  const [inputNumberCard, setInputNumberCard] = useState("");
  const [inputMM, setInputMM] = useState("");
  const [inputYY, setInputYY] = useState("");
  const [inputCVC, setInputCVC] = useState("");

  return (
    <FormContext.Provider
      value={{
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
