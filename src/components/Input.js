import "../styles/input.css";

const Input = ({ submitHandler, inputTextHandler, todo }) => {
	return (
		<form className="input-container" onSubmit={submitHandler}>
			<input
				className="input"
				type="text"
				onChange={inputTextHandler}
				value={todo}
			/>
			<button className="input-add-todo" type="text">
				Add Item
			</button>
		</form>
	);
};

export default Input;
