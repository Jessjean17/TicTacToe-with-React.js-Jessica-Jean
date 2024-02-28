import React, { useState } from "react";



//create your first component
const Board = (props) => {
	var { mark, handleWinner, nextMove, squareValues, setSquareValues } = props;

	var winningCombinations = [
		//horizontal straight lines
		[1, 1, 1, 0, 0, 0, 0, 0, 0],

		[0, 0, 0, 1, 1, 1, 0, 0, 0],

		[0, 0, 0, 0, 0, 0, 1, 1, 1],

		//vertical straight lines
		[1, 0, 0, 1, 0, 0, 1, 0, 0],

		[0, 1, 0, 0, 1, 0, 0, 1, 0],

		[0, 0, 1, 0, 0, 1, 0, 0, 1],

		//diagonal straight lines
		[1, 0, 0, 0, 1, 0, 0, 0, 1],

		[0, 0, 1, 0, 1, 0, 1, 0, 0]
	];

	const checkForWinner = (lastValues) => {
		let winner = null;
		winningCombinations.forEach(
			(winningArray) => {
				let successfulMatches = 0;
				for (let [ind, elm] of winningArray.entries()) {
					if (elm == 1) {
						if (lastValues[ind] == mark) {
							successfulMatches++;
							if (successfulMatches > 2) {
								winner = mark
							}
						}
					}
				}
			}
		)
		if (winner != null) {
			handleWinner(mark);
		}
	}

	const updateNextMove = (position) => {
		let newValues = squareValues.map((value, ind) => ind == position ? mark : value);
		setSquareValues(newValues);
		nextMove();
		checkForWinner(newValues);
		if (!newValues.includes("")) {
			console.log("Board is full")
		}
	}


	return (
		<div className="text-center">
			<div className="board clearfix" style={{ display: mark ? "block" : "none" }}>
				<div className="row">
					<div
						className="square"
						onClick={() => updateNextMove(0)}>
						{squareValues[0]}
					</div>
					<div
						className="square"
						onClick={() => updateNextMove(1)}>
						{squareValues[1]}
					</div>
					<div
						className="square"
						onClick={() => updateNextMove(2)}>
						{squareValues[2]}
					</div>
				</div>
				<div className="row">
					<div
						className="square"
						onClick={() => updateNextMove(3)}>
						{squareValues[3]}
					</div>
					<div
						className="square"
						onClick={() => updateNextMove(4)}>
						{squareValues[4]}
					</div>
					<div
						className="square"
						onClick={() => updateNextMove(5)}>
						{squareValues[5]}
					</div>
				</div>
				<div className="row">
					<div
						className="square"
						onClick={() => updateNextMove(6)}>
						{squareValues[6]}
					</div>
					<div
						className="square"
						onClick={() => updateNextMove(7)}>
						{squareValues[7]}
					</div>
					<div
						className="square"
						onClick={() => updateNextMove(8)}>
						{squareValues[8]}
					</div>
				</div>
			</div>

		</div>
	);
};

export default Board;
