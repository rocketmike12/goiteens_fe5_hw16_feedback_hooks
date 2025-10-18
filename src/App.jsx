import { Component } from "react";

import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";

import styles from "./App.module.scss";

export class App extends Component {
	constructor() {
		super();

		this.state = { good: 0, neutral: 0, bad: 0 };
	}

	handleFeedback = (level) => {
		switch (level) {
			case "good":
				this.setState({ good: this.state.good + 1 });
				break;
			case "neutral":
				this.setState({ neutral: this.state.neutral + 1 });
				break;
			case "bad":
				this.setState({ bad: this.state.bad + 1 });
				break;
			default:
				break;
		}
	};

	render() {
		return (
			<>
				<div className={styles["container"]}>
					<FeedbackOptions handleFeedback={this.handleFeedback} />
					<Statistics
						good={this.state.good}
						neutral={this.state.neutral}
						bad={this.state.bad}
						total={this.state.good + this.state.neutral + this.state.bad}
						positivePercentage={this.state.good ? Number((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100).toFixed(2) : 0}
					/>
				</div>
			</>
		);
	}
}
