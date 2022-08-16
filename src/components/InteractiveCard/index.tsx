import * as C from "./style/style";
import { CardForm } from "./cardForm";
import { CardsImages } from "./cardsImg";
import { FormProvider } from "../../shared/contexts/contextForm";
import "./style/animation.css";

export const InteractiveCard = () => {
  return (
    <C.Container>
      <FormProvider>
        <CardsImages />
        <CardForm />
      </FormProvider>
    </C.Container>
  );
};
