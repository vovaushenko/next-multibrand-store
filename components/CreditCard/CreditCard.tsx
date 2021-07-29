import Image from 'next/image';
import React from 'react';
import { MdWhatshot } from 'react-icons/md';
import * as Styled from './styles.CreditCard';

export interface Props {
  cardHolderName: string;
  cardHolderImd: string;
  cardNumber: string;
}
/**
 *Renders customer's credit card payment method
 *@function CreditCard
 *@param {string} cardHolderName - cart holder name
 *@param {string} cardHolderImd - cart holder photo url
 *@returns {JSX.Element} - Rendered CreditCard component
 */
const CreditCard = ({
  cardHolderName,
  cardHolderImd,
  cardNumber,
}: Props): JSX.Element => {
  return (
    <Styled.CreditCard>
      <Styled.FrontSide className="front">
        <Styled.ProviderName>SneakerBank</Styled.ProviderName>
        <Styled.ChipWrapper>
          <Styled.Chip>
            <Image
              src="/images/payment-icons/card-chip.png"
              alt="credit card chip"
              height={50}
              width={80}
              objectFit="contain"
              quality={90}
            />
          </Styled.Chip>
          <Styled.SneakerManiacs>sneaker maniacs</Styled.SneakerManiacs>
        </Styled.ChipWrapper>
        <Styled.CardNumber>{cardNumber}</Styled.CardNumber>

        <Styled.NameWrapper>
          <Styled.Name>{cardHolderName}</Styled.Name>
          <MdWhatshot className="icon" />
        </Styled.NameWrapper>
      </Styled.FrontSide>

      <Styled.BackSide className="back">
        <Styled.CustomerAvatar>
          <Image
            src={cardHolderImd}
            alt={cardHolderName}
            height={140}
            width={140}
            objectFit="contain"
            quality={90}
          />
        </Styled.CustomerAvatar>
        <Styled.Contacts>
          <Styled.CustomerSupport>VIP-Customer support</Styled.CustomerSupport>
          <Styled.Telephone href="tel:1-777-777-7777">
            1-777-777-7777
          </Styled.Telephone>
          <Styled.Telephone href="tel:1-777-888-9999">
            1-777-888-9999
          </Styled.Telephone>
          <Styled.Telephone href="tel:1-777-999-789">
            1-777-999-789
          </Styled.Telephone>

          <Styled.CustomerSupport>
            Contact us to solve any problems
          </Styled.CustomerSupport>
        </Styled.Contacts>
      </Styled.BackSide>
    </Styled.CreditCard>
  );
};
export default CreditCard;
