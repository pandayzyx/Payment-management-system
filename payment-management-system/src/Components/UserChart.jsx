import React, { Component } from "react";
import { connect } from "react-redux";
import "../../node_modules/react-vis/dist/style.css";
import {
	XYPlot,
	LineSeries,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis,
	VerticalBarSeries,
	MarkSeries,
} from "react-vis";

const dataExpense = [
	// { x: 1, y: 1},
	// { x: 2, y: 2},
	// { x: 3, y: 4 },
	// { x: 4, y: 9 },
	// { x: 5, y: 1 },
	// { x: 6, y: 7 },
	// { x: 7, y: 6 },
];
const dataSavings =[

]

class UserChart extends React.Component {
	render() {
		let { id, UserExpenseDetails } = this.props;
		let tableData = UserExpenseDetails.find((item) => item.id === id);
		let userExpenseData = tableData.details;

		userExpenseData.forEach((item) => {
			if (item.Type === "Expense") {
				dataExpense.push({ y: Number(item.Amount), x: Number(item.day) });
            }
            else{
				dataSavings.push({ y: Number(item.Amount), x: Number(item.day) });

            }
		});

		return (
			<div className="Chart row p-3">
				<div className="col-6">
					{" "}
					 Expense Bar Chart
					<XYPlot height={300} width={300}>
						<VerticalBarSeries data={dataExpense} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis label="data" />
						<YAxis />
					</XYPlot>
				</div>
				<div className="col-6">
					Earning Bar Chart
					<XYPlot height={300} width={300}>
						<VerticalBarSeries data={dataSavings} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis label="data" />
						<YAxis />
					</XYPlot>
				</div>

                <div className="col-6 ">
					{" "}
					Expense Graph
					<XYPlot height={300} width={300}>
						<LineSeries data={dataExpense} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis label="data" />
						<YAxis />
					</XYPlot>
				</div>

				<div className="col-6 ">
					{" "}
					Savings Graph
					<XYPlot height={300} width={300}>
						<LineSeries data={dataSavings} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis label="data" />
						<YAxis />
					</XYPlot>
				</div>
				
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		UserExpenseDetails: state.UserExpenseDetails,
	};
};
export default connect(MapStateToProps)(UserChart);
