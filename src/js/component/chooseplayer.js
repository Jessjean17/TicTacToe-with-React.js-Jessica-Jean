import React, { useState } from "react";


//create your first component
const ChoosePlayer = (props) => {
	var { mark, setMark, player1, player2, setPlayer1, setPlayer2 } = props;
	return (
		<div className="text-center">
			<div
				style={{ display: mark ? "none" : "block" }}
				id="modal-container">
				<div className="choose-modal">
					<h3>Choose Your Weapon</h3>
					<div>
						<input
							type="text"
							placeholder="Player 1 username"
							value={player1}
							onChange={evt => setPlayer1(evt.target.value)}
						/>
						<input
							type="text"
							placeholder="Player 2 username"
							value={player2}
							onChange={evt => setPlayer2(evt.target.value)}
						/>
					</div>
					<div className="button-area">
						<span
							onClick={() => {
								setMark("x");
							}}
							className="x-marker">
							X
						</span>
						<span
							onClick={() => {
								setMark("o");
							}}
							className="o-marker">
							O
						</span>
					</div>
				</div>
				<div className="end-game-modal">
					<h3 />
					<p>Try harder next time!</p>
					<div className="button-area">
						<span>Play Again</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChoosePlayer;
