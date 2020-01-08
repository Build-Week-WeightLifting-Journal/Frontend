import React, { useState} from 'react';
import { WorkoutInfoDiv, WorkoutListDiv, WorkoutDiv, ButtonDiv} from "./WorkoutStyles";

const Workout = ({workout, index, completeWorkout, removeWorkout }) => {
  return(
    <WorkoutInfoDiv>
        {workout.text}
      <ButtonDiv>
        <button onClick={() => completeWorkout(index)}>Complete</button>
        <button onClick={() => removeWorkout(index)}>x</button>
      </ButtonDiv>
    </WorkoutInfoDiv>
  );
}

function WorkoutForm({ addWorkout }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addWorkout(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([
      {
        text: "Test Workout #1",
        isCompleted: false
      },
      {
        text: "Test Workout #2",
        isCompleted: false
      },
      {
        text: "Test Workout #3",
        isCompleted: false
      }
    ]);

    const addWorkout = text => {
      const newWorkouts = [...workouts, { text }];
      setWorkouts(newWorkouts);
    };
  
    const completeWorkout = index => {
      const newWorkouts = [...workouts];
      newWorkouts[index].isCompleted = true;
      setWorkouts(newWorkouts);
    };
  
    const removeWorkout = index => {
      const newWorkouts = [...workouts];
      newWorkouts.splice(index, 1);
      setWorkouts(newWorkouts);
    };


    return(
      <WorkoutListDiv>
        <WorkoutDiv>
            {workouts.map((workout, index) => (
              <Workout key={index} index={index} workout={workout} completeWorkout={completeWorkout} removeWorkout={removeWorkout}/>
            ))}
            <WorkoutForm addWorkout={addWorkout} />
        </WorkoutDiv>
      </WorkoutListDiv>
    );
}

export default WorkoutList;