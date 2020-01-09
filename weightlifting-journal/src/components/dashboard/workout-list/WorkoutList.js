import React, { useState} from 'react';
import history from "./history.js";
import { Router, Route, Link, Switch} from "react-router-dom";
import { WorkoutInfoDiv, WorkoutListDiv, WorkoutDiv, ButtonDiv, ListButton, InputDiv} from "./WorkoutStyles";
import ExerciseList from "./exercise-list/ExerciseList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* adding a public API here to meet my MVP - AJ */
import CharacterList from "../../public-api/CharacterList";


const Workout = ({workout, index, completeWorkout, removeWorkout, editWorkout }) => {
 
  return(
    <>
      <Router history={history}>
        <Route path="/exercise-list" component={ExerciseList} />
      </Router>

      <WorkoutInfoDiv style={{textDecoration: workout.isCompleted ? 'line-through' : ''}}>
        <button onClick={() => history.push('/exercise-list')} >{workout.text}</button>
        <ButtonDiv>
          <ListButton onClick={() => editWorkout(index)} icon="edit">
            <FontAwesomeIcon icon="edit"/>
          </ListButton>
          <ListButton onClick={() => completeWorkout(index)} icon="trash">
            <FontAwesomeIcon icon="check"/>
          </ListButton>
          <ListButton onClick={() => removeWorkout(index)}>
            <FontAwesomeIcon icon="trash"/>
          </ListButton>
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

    const editWorkout = (text, key) => {

      const newWorkouts = [...workouts];
      newWorkouts.map(item=>{      
        if(item.key===key){
          console.log(item.key +""+key)
          item.text = text;
        }
      })
      this.setState({
        newWorkouts: newWorkouts
      }) 
      setWorkouts(newWorkouts);
    };

    return(
      <WorkoutListDiv>
        <WorkoutDiv>
            {workouts.map((workout, index) => (
              <Workout key={index} index={index} workout={workout} completeWorkout={completeWorkout} removeWorkout={removeWorkout} editWorkout={editWorkout}/>
            ))}
            <WorkoutForm addWorkout={addWorkout} />
        </WorkoutDiv>
      </WorkoutListDiv>
    );
}

export default WorkoutList;
