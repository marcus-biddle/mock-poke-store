import React from 'react'
import { Link } from 'react-router-dom';
import { getPriceNum, numToUSD } from '../../../helpers/currency';
import { BsCartPlusFill } from 'react-icons/bs';
import './styled/style.css';
import { CardHeader, CardInfoWrapper, CardName, CardPrice, CardStyle, DiscountedPrice, ImageWrapper, SaleSticker, StyledImg, StyledSpan } from './styled';
import { DiscountPrice, PokeName, PokePrice } from '../../../pages/Home/styled';
import { useShoppingCartContext } from '../../../hooks';

// export const PokemonPrice = ({ pokemon }: any) => {
//     const price = getPriceNum(pokemon);

//     return (
//         <div>
//             { numToUSD(price) }
//         </div>
//     )
// }

export const ProductCard = ({ pokemon, region }: any) => {
    const { increaseCartQuantity } = useShoppingCartContext();
    const price = getPriceNum(pokemon);
    const discountPrice = price - price * .15;

  return (
    <CardStyle>
        <Link to={`${pokemon.id - 1}`}>
            {pokemon.height < 11 && pokemon.id % 2 === 0 
            ? 
            <SaleSticker>
                SALE
            </SaleSticker>
            :
            ''
            }
            <ImageWrapper>
                <StyledImg src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </ImageWrapper>
        </Link>
        <CardInfoWrapper>
            <div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <CardHeader>{pokemon.name}</CardHeader>
                <div style={{ paddingLeft: '10px', paddingTop: '5px'}}>
                    {pokemon.types.map((types: any) => {
                        return (
                            <StyledSpan key={types.type.name} itemType={types.type.name}>{types.type.name}</StyledSpan>
                        )
                    })}
                </div>
            </div>

            {pokemon.height < 11 && pokemon.id % 2 === 0
            ?
            <>
            <CardPrice>{`${numToUSD(discountPrice)}`}</CardPrice>
            <DiscountedPrice>{`${numToUSD(price)}`}</DiscountedPrice>
            </>
            :
            <CardPrice>{`${numToUSD(price)}`}</CardPrice>
            }
            </div>
            <Link to={'/cart'} onClick={() => increaseCartQuantity(pokemon.id, price, pokemon.name)}>
                <div className='grid-cta-wrapper'>
                    <BsCartPlusFill className='icon-CTA-grid'/>
                </div>
            </Link>
        </CardInfoWrapper>
    </CardStyle>
  )
}