import { Component } from "react";

import styles from "./FeedbackOptions.module.scss";

export class FeedbackOptions extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<>
				<div className={styles["feedback-options"]}>
					<h1 className={styles["feedback-options__title"]}>Please leave feedback</h1>
					<button
						className={styles["feedback-options__btn"]}
						onClick={() => {
							this.props.handleFeedback("good");
						}}
					>
						good
					</button>
					<button
						className={styles["feedback-options__btn"]}
						onClick={() => {
							this.props.handleFeedback("neutral");
						}}
					>
						neutral
					</button>
					<button
						className={styles["feedback-options__btn"]}
						onClick={() => {
							this.props.handleFeedback("bad");
						}}
					>
						bad
					</button>
				</div>
			</>
		);
	}
}
