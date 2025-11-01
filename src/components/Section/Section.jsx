import styles from "./Section.module.scss";

export const Section = function ({ title, children }) {
	return (
		<>
			<section className={styles["section"]}>
				<h2>{title}</h2>
				{children}
			</section>
		</>
	);
};
