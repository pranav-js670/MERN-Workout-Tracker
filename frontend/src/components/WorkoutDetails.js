import React from "react";

const handleClick = async ({ workout }) => {
  if (!workout || !workout._id) {
    console.error("Workout is undefined or missing an _id");
    return;
  }
  const response = await fetch("/api/workouts/" + workout._id, {
    method: "DELETE",
  });
  const json = await response.json();
  if (response.ok) {
    console.log("Workout deleted", json);
  }
};

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span className="material-symbols-outlined" onClick={() => handleClick({ workout })}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
