import styled from "styled-components"

const keys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'ã',
    'õ',
    'ç',
    'é',
]

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(75px, 1fr));
gap: 0.5rem;y
width: 600px;
`
const Button = styled.button<{isActive: boolean}>`
    opacity: ${(p) => p.isActive ? 'null': '0.3'};

    &: focus:disabled {
        outline: none;
        border-color: transparent;
        cursos: not-allowed;
    }
    &: focus-visible:disabled{
        outline: none;
        border-color: transparent;
        cursor: not-allowed;
    }
    &: hover:disabled{
        outline: none;
        border-collor: transparent;
        cursor: not-allowd;
    }
`
/*Keys feiito com map */
export default function Keyboard(){
    return(
        <Wrapper>
            {keys.map((letter) => (
            <Button isActive={true} key={letter}>
                {letter.toUpperCase()}
                </Button>
            ))}
        </Wrapper>
    )
}