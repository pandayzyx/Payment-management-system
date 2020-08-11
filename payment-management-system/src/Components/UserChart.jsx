import React, { Component } from "react";

import { connect } from "react-redux";
import "../../node_modules/react-vis/dist/style.css";
import {
	LineSeries,
	VerticalGridLines,
	HorizontalGridLines,
	XAxis,
	YAxis,
	VerticalBarSeries,
	FlexibleWidthXYPlot,
	FlexibleXYPlot
} from "react-vis";

class UserChart extends React.Component {
	ccom;

	render() {
		let { id, UserExpenseDetails } = this.props;
		let tableData = UserExpenseDetails.find((item) => item.id === id);
		let userExpenseData = tableData.details;
		const dataExpense = [];
		const dataSavings = [];
		for (let i = 0; i < userExpenseData.length; i++) {
			if (userExpenseData[i].Type === "Expense") {
				console.log(i);
				dataExpense.push({
					y: Number(userExpenseData[i].Amount),
					x: Number(userExpenseData[i].day),
				});
			} else if (userExpenseData[i].Type === "Saving") {
				console.log(true);
				dataSavings.push({
					y: Number(userExpenseData[i].Amount),
					x: Number(userExpenseData[i].day),
				});
			} else {
				dataExpense.push({ x: 1, y: 500 });
				dataSavings.push({ x: 2, y: 400 });
			}
		}

		return (
			<div className="Chart row p-2">
				<div className="col-6">
					{" "}
					Expense Bar Chart
					<FlexibleXYPlot
					margin={{left: 100, right: 100}}
                        width= {600}
                         height= {300}
						 >
						<VerticalBarSeries data={dataExpense} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis position = "middle"  title = "Days"/>
						<YAxis position = "middle" title = "Amount(Rs)" />
					</FlexibleXYPlot>
				</div>
				<div className="col-6">
					Earning Bar Chart
					<FlexibleXYPlot margin={{left: 100, right: 100}}
                        width= {600}
                         height= {300}>
						<VerticalBarSeries data={dataSavings} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis position = "middle"  title = "Days" label="data" />
						<YAxis  position = "middle" title = "Amount(Rs)" />
					</FlexibleXYPlot>
				</div>

				<div className="col-6 ">
					{" "}
					Expense Graph
					<FlexibleXYPlot height={300} width={300}>
						<LineSeries data={dataExpense} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis position = "middle"  title = "Days" label="data" />
						<YAxis  position = "middle" title = "Amount(Rs)" />
					</FlexibleXYPlot>
				</div>

				<div className="col-6 ">
					{" "}
					Earning Graph
					<FlexibleXYPlot height={300} width={300}>
						<LineSeries data={dataSavings} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis position = "middle"  title = "Days" label="data" />
						<YAxis  position = "middle" title = "Amount(Rs)" />
					</FlexibleXYPlot>
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
