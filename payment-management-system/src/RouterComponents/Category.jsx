import React from "react";
import { connect } from "react-redux";
import { addCategory } from "../Redux/action";
import { v4 as uuidv4 } from "uuid";

export class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "",
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		let categoryDetails = {
			Category: this.state.category,
			id: uuidv4(),
		};
		console.log(this.props);
		let { addCategory, Category } = this.props;
		return (
			<div className="container mt-3 p-3">
				<div className="row">
					<div
						style={{ overflow: "hidden" }}
						className="col-6 bg bg-secondary p-5 offset-3 shadow-lg"
					>
						<input
							placeholder="Add category"
							name="category"
							value={this.state.category}
							onChange={(e) => this.handleChange(e)}
							className="form-control"
						/>
						<button
							onClick={() => addCategory(categoryDetails)}
							className="btn btn-danger mt-3 offset-4"
						>
							Add Catgory
						</button>
						<div>
							<ul>
								{Category.map((item) => (
									<li
										style={{ fontSize: "30px" }}
										key={uuidv4()}
										className="font-weight-bold"
									>
										{item.Category}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		Category: state.Category,
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		addCategory: (payload) => dispatch(addCategory(payload)),
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Category);
