import React from 'react'
import { useNavigate } from 'react-router'
import region1 from '../../assets/region1.png';
import region2 from '../../assets/region2.png';
import region3 from '../../assets/region3.jpg';
import { BannerButton, BannerWrapper, HeroImg, HeroImgStyle, HeroMessage, HeroWrapper, HomeStyle } from './styled'

const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeroImgStyle>
                <HeroImg src={region2} alt='' />
                <HeroMessage onClick={() => navigate('/johto/pokemon')}>Johto Region</HeroMessage>
            </HeroImgStyle>
            <HeroImgStyle>
                <HeroImg src={region1} alt='' />
                <HeroMessage onClick={() => navigate('/kanto/pokemon')}>Kanto Region</HeroMessage>
            </HeroImgStyle>
            <HeroImgStyle>
                <HeroImg src={region3} alt='' />
                <HeroMessage onClick={() => navigate('/sinnoh/pokemon')}>Sinnoh Region</HeroMessage>
            </HeroImgStyle>
        </>
            
    )
}

export const Banner = () => {
    return (
        <BannerButton onClick={() => alert('You clicked this button! The developer has not made a login page yet. Whoops...')}>
            <h2>Free Standard Shipping Over $300 for Members</h2>
            <span>Not a member? Join Today!</span>
        </BannerButton>
    )
};


// const PokeBall = ({ index }: any) => {
//     const { pokemon, isLoading } = usePokemonContext();
//     const navigate = useNavigate();
//     // This doesn't work because pokeimg is all stacked over one position.

//     const handleClick = () => {
//         // Eventually figure out way to link to pokemon PDP.
//         navigate('/kanto/pokemon'); 
//     }
//     return (
//         <div>
//             <ImgCover src={pic2} alt='' />
//             <PokeImg onClick={handleClick}>
//                 <StyledImg src={ pokemon[index].sprites.front_default} alt='' />
//             </PokeImg>
            
//         </div>
//     )
// }

// const Trending = () => {
//     const { pokemon, isLoading } = usePokemonContext();
//     return (
//         <ImgContainer>
//          {isLoading === false? 
//          <>
//             <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
//             <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
//             <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
//             <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
//             <PokeBall index={Math.floor(pokemon.length * Math.random())}/>
//          </>
//          :
//          'Loading...'
//          }
            
//         </ImgContainer>
//     )
// }

export const Home = () => {
  return (
    <HomeStyle>
        <HeroWrapper>
            <Hero />
        </HeroWrapper>
        <BannerWrapper>
            <Banner />
        </BannerWrapper>
        {/* Section could be tabGroups of Starters and legendaries */}

        {/* <TrendingWrapper>
            <h2 style={{ paddingLeft: '18px'}}>Trending Pokemon</h2>
            <Trending />
        </TrendingWrapper> */}
        {/* need to fix this lower banner */}
        
    </HomeStyle>
  )
}