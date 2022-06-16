// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (player, row, col) {
    if (!this.board[row][col]) {
      this.board[row][col] = player;
    }
    // console.log(this.board);
    return this.board;
  },
  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    return this.board;
  },
};
