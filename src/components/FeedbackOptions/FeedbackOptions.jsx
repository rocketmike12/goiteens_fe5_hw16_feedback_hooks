import { Section } from "../Section/Section";

import styles from "./FeedbackOptions.module.scss";

export const FeedbackOptions = function ({ handleFeedback }) {
	return (
		<>
			<Section title="Please leave feedback">
				<div className={styles["feedback-options__btn-wrap"]}>
					<button
						className={styles["feedback-options__btn"]}
						onClick={() => {
							handleFeedback("good");
						}}
					>
						good
					</button>
					<button
						className={styles["feedback-options__btn"]}
						onClick={() => {
							handleFeedback("neutral");
						}}
					>
						neutral
					</button>
					<button
						className={styles["feedback-options__btn"]}
						onClick={() => {
							handleFeedback("bad");
						}}
					>
						bad
					</button>
				</div>
			</Section>
		</>
	);
};
