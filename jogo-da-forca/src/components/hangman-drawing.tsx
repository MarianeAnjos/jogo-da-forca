import styled from "styled-components"

const Base = styled.div`
    height: 10px;
    width: 250px;
    background: black;
    margin-left: 100px;
`
const VerticalLine = styled.div`
    height: 250px;
    width: 10px;
    background: blue;
    `
    const HorizontalLine = styled.div`
    height: 10px;
    width: 140px;
    background: blue;
    position: absolute;
    right: 80px;
    top: 0;
    `
    const VerticalLineSmall = styled.div`
    height: 40px;
    width: 10px;
    background: blue;
    margin-left: 150px;
    position: absolute;
    right: 80px;
    top: 0;
    `

    const Head = styled.div`
    height: 30px;
    width: 30px;
    border: 1px solid orange;
    border-radius: 50%;
    position: absolute;
    top: 46px;
    left: 71;
    right: 67px;
    `
    const Body = styled.div`
    height: 80px;
    width: 10px;
    background: orange;
    position: absolute;
    top: 77px;
    right: 77px;
    `
    const RightArm = styled.div`
    height: 10px;
    width: 50px;
    background: orange;
    position: absolute;
    top: 80px;
    right: 37px;
    rotate: -30deg;
    `
    const LeftArm = styled.div`
    height: 10px;
    width: 50px;
    background: orange;
    position: absolute;
    top: 80px;
    right: 77px;
    rotate: 30deg;
    `
    const RightLeg = styled.div`
    height: 10px;
    width: 50px;
    background: orange;
    position: absolute;
    top: 157px;
    right: 80px;
    rotate: -25deg;
    `
    const LeftLeg = styled.div`
    height: 10px;
    width: 50px;
    background: orange;
    position: absolute;
    top: 157px;
    right: 35px;
    rotate: 25deg;
    `
export default function HangmanDrawing(){

    /*Div de return relativo, dentro dela trabalhamos com position absolute */ 
    /* Para o position absoluto, a tela screen como todo, para limitar espaços utilizar relativo*/
    /*Utilizando o absoluto na div Pai ela será absoluta nesta div e não no navegador por completo*/
    /*Divs são inline block*/
    return ( 
    <div style={ {position: 'relative', display: "flex", flexDirection:'column', alignItems: 'center'}}>
        <Head/>
        <Body/>
        <RightArm/>
        <LeftArm/>
        <RightLeg/>
        <LeftLeg/>
        <VerticalLineSmall/>
        <VerticalLine/>
        <HorizontalLine/>
        <Base/>

    </div>
)
}