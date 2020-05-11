
    currentPlayerPosition = (array,) => {
        return Board.includes(number => (
            this.state.PlayerPosition === number
            ? <Piece number={number} />
            : <Tile number={number} />
        ))
    }
    
    currentPlayerPosition = (Board, PlayerPosition) => {
        return Board.includes(PlayerPosition);
    }
    
    
    
    let PlayerPosition = this.state.PlayerPosition
    let DiceResult = this.state.DiceResult
    let Destination = PlayerPosition + DiceResult
    while (PlayerPosition < Destination){
        return <Piece /> & PlayerPosition ++
    }
    
    currentPlayerPosition = (Board) => {
        let iPosition = this.state.PlayerPosition
        let board = this.state.Board
        let findPlayerPosition = (array, tile) => array.includes(tile)
        if (findPlayerPosition(board, iPosition) === true) {
            return <Piece />
        }
    }
    
    currentPath = (Board) => {
        let PathBoard = Board.map(number => {
            if (this.state.PlayerPosition === number){
                <Piece number={number} />
            } else if (this.state.Path.includes(number) {
                <Path number={number} />
            } else {
                <Tile number={number} />
            }}
        )
        return PathBoard;
    }
    
    
    
    
    
    CreateBoard = (Board) => {
        let Currentboard = []
        let iPath = this.state.Path
        for (let tile = 0; tile <16; tile ++){
            Board.push(tile)
        }
        return Board.map(number =>
            iPath.includes(number)
            ? <Path number={number} />
            : <Tile number={number} />
        )
    }

    currentPath = () => {

        return CurrentBoard.map(number =>
            iPath.includes(number)
            ? <Path number={number} />
            : <Tile number={number} />
        )
    }