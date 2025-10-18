import { Component } from "react";
import styles from "./Statistics.module.scss";

export class Statistics extends Component {
	render() {
		return (
			<>
				<div className={styles["statistics"]}>
					<h2 className={styles["statistics__title"]}>Statistics</h2>
					<p className={styles["statistics__item"]}>Good: {this.props.good}</p>
					<p className={styles["statistics__item"]}>Neutral: {this.props.neutral}</p>
					<p className={styles["statistics__item"]}>Bad: {this.props.bad}</p>
					<p className={styles["statistics__item"]}>Total: {this.props.total}</p>
					<p className={styles["statistics__item"]}>Positive feedback: {this.props.positivePercentage}%</p>
				</div>
			</>
		);
	}
}
