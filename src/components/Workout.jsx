import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
	const { workout } = props;

	return (
		<SectionWrapper
			id={"workout"}
			header={"Welcome to"}
			title={["The", "DANGER", "Zone"]}
		>
			<div className="flex flex-col gap-4">
				{workout.map((exercise, exerciseIndex) => {
					return (
						<ExerciseCard
							exercise={exercise}
							key={exerciseIndex}
							index={exerciseIndex}
						/>
					);
				})}
			</div>
		</SectionWrapper>
	);
}
