import React, { useState} from 'react';
import history from "./history.js";
import { Router, Route } from "react-router-dom";
import { WorkoutInfoDiv, WorkoutListDiv, WorkoutDiv, ButtonDiv, ListButton, InputDiv} from "./WorkoutStyles";
import ExerciseList from "./exercise-list/ExerciseList";

const Workout = ({workout, index, completeWorkout, removeWorkout }) => {
 
  return(
    <>
      <Router history={history}>
        <Route path="/exercise-list" component={ExerciseList} />
      </Router>

      <WorkoutInfoDiv style={{textDecoration: workout.isCompleted ? 'line-through' : ''}}>
        <button onClick={() => history.push('/exercise-list')} >{workout.text}</button>
        <ButtonDiv>
          <ListButton onClick={() => completeWorkout(index)}>Complete</ListButton>
          <ListButton onClick={() => removeWorkout(index)}>x</ListButton>
        </ButtonDiv>
      </WorkoutInfoDiv>

    </>
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
      <InputDiv
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