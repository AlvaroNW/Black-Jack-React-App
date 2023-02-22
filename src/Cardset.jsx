import styled from "styled-components"; // you have to search and install this component in the app


const BlackCardBox = styled.div`
    color: black;
    font-size: 8rem;
`;

const RedCardBox = styled.div`
    color: red;
    font-size: 8rem;
`;

const fullDeckMap = new Map([
    ["Clubs Two", "🃒",],
    ["Clubs Three", "🃓"],
    ["Clubs Four", "🃔"],
    ["Clubs Five", "🃕"],
    ["Clubs Six", "🃖"],
    ["Clubs Seven", "🃗"],
    ["Clubs Eight", "🃘"],
    ["Clubs Nine", "🃙"],
    ["Clubs Ten", "🃚"],
    ["Clubs Jack", "🃛"],
    ["Clubs Queen", "🃝"],
    ["Clubs King", "🃞"],
    ["Clubs Ace", "🃑"],
    ["Diamonds Two", "🃂",],
    ["Diamonds Three", "🃃"],
    ["Diamonds Four", "🃄"],
    ["Diamonds Five", "🃅"],
    ["Diamonds Six", "🃆"],
    ["Diamonds Seven", "🃇"],
    ["Diamonds Eight", "🃈"],
    ["Diamonds Nine", "🃉"],
    ["Diamonds Ten", "🃊"],
    ["Diamonds Jack", "🃋"],
    ["Diamonds Queen", "🃍"],
    ["Diamonds King", "🃎"],
    ["Diamonds Ace", "🃁"],
    ["Hearts Two", "🂲"],
    ["Hearts Three", "🂳"],
    ["Hearts Four", "🂴"],
    ["Hearts Five", "🂵"],
    ["Hearts Six", "🂶"],
    ["Hearts Seven", "🂷"],
    ["Hearts Eight", "🂸"],
    ["Hearts Nine", "🂹"],
    ["Hearts Ten", "🂺"],
    ["Hearts Jack", "🂻"],
    ["Hearts Queen", "🂽"],
    ["Hearts King", "🂾"],
    ["Hearts Ace", "🂱"],
    ["Spades Two", "🂢"],
    ["Spades Three", "🂣"],
    ["Spades Four", "🂤"],
    ["Spades Five", "🂥"],
    ["Spades Six", "🂦"],
    ["Spades Seven", "🂧"],
    ["Spades Eight", "🂨"],
    ["Spades Nine", "🂩"],
    ["Spades Ten", "🂪"],
    ["Spades Jack", "🂫"],
    ["Spades Queen", "🂭"],
    ["Spades King", "🂮"],
    ["Spades Ace", "🂡"]
]);


function Cardset({ value }) {
    console.log(value);
    if (value.includes('Diamonds') ||value.includes('Hearts') ){
        return ( 
            <RedCardBox>{fullDeckMap.get(value)}</RedCardBox>

        )
    }else{
        return (
            <BlackCardBox>{fullDeckMap.get(value)}</BlackCardBox>
        )
    }
    
}

export default Cardset;

