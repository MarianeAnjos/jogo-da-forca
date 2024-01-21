import styled from "styled-components"


/*Construção dos mostradores de letras*/


const Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 0.5rem;
font-size: 4rem;
font-weigth: bold;
text-transform: uppercase;
font-family: sans-serif;
`

export default function HangmandWord(){

    const word ='teste'

    return(
        <Wrapper>
            {word.split('').map((letter, index) => (
                <span style={{ borderBottom: '0.1em solid black' }}  key={index}>
                    {letter}
                    </span>
            ))} 
        </Wrapper>
    )
}