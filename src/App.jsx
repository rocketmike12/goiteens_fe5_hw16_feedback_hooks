import { useState } from "react";

import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";

import styles from "./App.module.scss";

export const App = function () {
	const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

	const handleFeedback = (level) => {
		switch (level) {
			case "good":
				setFeedback({ ...feedback, good: feedback.good + 1 });
				break;
			case "neutral":
				setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
				break;
			case "bad":
				setFeedback({ ...feedback, bad: feedback.bad + 1 });
				break;
			default:
				break;
		}
	};

	const countTotalFeedback = function () {
		return feedback.good + feedback.neutral + feedback.bad;
	};

	const countPositivePercentage = function () {
		return feedback.good ? Number((feedback.good / (feedback.good + feedback.neutral + feedback.bad)) * 100).toFixed(2) : 0;
	};

	return (
		<>
			<div className={styles["container"]}>
				<FeedbackOptions handleFeedback={handleFeedback} />
				<Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback()} positivePercentage={countPositivePercentage()} />
			</div>
		</>
	);
};
