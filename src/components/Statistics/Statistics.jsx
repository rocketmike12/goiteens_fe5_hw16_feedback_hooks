import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";

import styles from "./Statistics.module.scss";

export const Statistics = function ({ good, neutral, bad, total, positivePercentage }) {
	return (
		<>
			<Section title="Statistics">
				{good + bad + neutral ? (
					<ul className={styles["statistics__list"]}>
						<li className={styles["statistics__list__item"]}>
							<p className={styles["statistics__list__text"]}>Good: {good}</p>
						</li>
						<li className={styles["statistics__list__item"]}>
							<p className={styles["statistics__list__text"]}>Neutral: {neutral}</p>
						</li>
						<li className={styles["statistics__list__item"]}>
							<p className={styles["statistics__list__text"]}>Bad: {bad}</p>
						</li>
						<li className={styles["statistics__list__item"]}>
							<p className={styles["statistics__list__text"]}>Total: {total}</p>
						</li>
						<li className={styles["statistics__list__item"]}>
							<p className={styles["statistics__list__text"]}>Positive feedback: {positivePercentage}%</p>
						</li>
					</ul>
				) : (
					<Notification message="insufficient data" />
				)}
			</Section>
		</>
	);
};
