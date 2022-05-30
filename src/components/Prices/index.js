import React from "react";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import {
  PricesContainer,
  PricesH1,
  PricesCard,
  PricesWrapper,
  PricesIcon,
  PricesH2,
  PricesP,
} from "./PricesElements";

const Prices = () => {
  return (
    <PricesContainer id="prices">
      <PricesH1> Price down below</PricesH1>
      <PricesWrapper>
        <PricesCard>
          <PricesIcon src={icon1} />
          <PricesH2> 75€</PricesH2>
          <PricesH2> 1 Day Acces</PricesH2>
          <PricesP> You can choose one day from the festival</PricesP>
        </PricesCard>
        <PricesCard>
          <PricesIcon src={icon2} />
          <PricesH2> 200€ </PricesH2>
          <PricesH2> Full festival pass </PricesH2>
          <PricesP> You have acces to all stages </PricesP>
        </PricesCard>
        <PricesCard>
          <PricesIcon src={icon3} />
          <PricesH2> 280€</PricesH2>
          <PricesH2> Premium festival pass</PricesH2>
          <PricesP> You have acces to all stages and backstages </PricesP>
        </PricesCard>
      </PricesWrapper>
    </PricesContainer>
  );
};

export default Prices;
