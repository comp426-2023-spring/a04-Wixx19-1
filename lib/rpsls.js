export {playRps, playRpsls}

function playRps(playerMove){
    const moves = ['rock', 'paper', 'scissors'];
    const random = math.floor(math.random() * moves.length);

    if(playerMove == undefined){
        return {
            player: moves[random]
        };
    }else if (!moves.includes(playerMove.toLowerCase())){
        console.error('Error: wrong input')
        throw new RangeError();
    } else {
        const computerMove = moves[random];
        let result;

        switch(playerMove.toLowerCase()){
            case 'rock':
                result=(computerMove == 'rock') ? 'tie':
                (computerMove == 'paper') ? 'lose' : 'win';
                break;
            case 'paper':
                result=(computerMove == 'paper') ? 'tie':
                (computerMove == 'scissors') ? 'lose' : 'win';
                break;
            case 'scissors':
                result=(computerMove == 'scissors') ? 'tie':
                (computerMove == 'rock') ? 'lose' : 'win';
                break;
        }
        return {
            player: playerMove.toLowerCase(),
            opponent: computerMove,
            result: result
        };
    }
}
function playRpsls(playerMove){
    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const random = math.floor(math.random() * moves.length);

    if(playerMove == undefined){
        return {
            player: moves[random]
        };
    }else if (!moves.includes(playerMove.toLowerCase())){
        console.error('Error: wrong input')
        throw new RangeError();
    } else {
        const computerMove = moves[random];
        let result;

        switch(playerMove.toLowerCase()){
            case 'rock':
                result=(computerMove == 'rock') ? 'tie':
                (computerMove == 'paper' || computerMove == 'spock') ? 'lose' : 'win';
                break;
            case 'paper':
                result=(computerMove == 'paper') ? 'tie':
                (computerMove == 'scissors' || computerMove == 'lizard') ? 'lose' : 'win';
                break;
            case 'scissors':
                result=(computerMove == 'scissors') ? 'tie':
                (computerMove == 'rock' ||  computerMove == 'spock') ? 'lose' : 'win';
                break;
            case 'lizard':
                result=(computerMove == 'lizard') ? 'tie':
                (computerMove == 'rock' ||  computerMove == 'scissors') ? 'lose' : 'win';
                break;
            case 'spock':
                result=(computerMove == 'spock') ? 'tie':
                (computerMove == 'paper' ||  computerMove == 'lizard') ? 'lose' : 'win';
                break;
        }
        return {
            player: playerMove.toLowerCase(),
            opponent: computerMove,
            result: result
        };
    }

}
