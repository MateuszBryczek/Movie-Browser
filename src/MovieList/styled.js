import styled from "styled-components";


export const Wrapper= styled.div `
max-width: 1368px;
height: 1391px;
margin-top:30px;
margin-left:276px;
display:flex;
flex-direction: column;
@media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
justify-content: center;
  }


`
export const TilesWrapper = styled.div `
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap:24px;

@media (max-width: ${({ theme }) => theme.breakpoints.mediumDevices}px) {
    width: 100%;
    height: 142px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    justify-items: center;
  }
`

export const StyledTitle= styled.p`
font-size: 36px;
font-weight: 600;
line-height: 43.2 px;
max-height: 45px;
`
//są wg wytycznych z Figmy, ale na oko to powinno to być znacznie mniejsze