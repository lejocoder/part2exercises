import React from 'react';
import ReactDOM from 'react-dom';
// part 2.2 exercises, works for 2.3 as well 

// 0 acts as the sums, number would be the item for each iteration when we reduce
const Course = (props) => {
    const myCourses = props.course.parts
    return (
        <div>
            <h1>{props.course.name}</h1>
            <ul>
                {myCourses.map(course => <li key = {course.id}>{course.name + " " + course.exercises}</li>)} 
                <li key = "total"> total of {myCourses.reduce(function(sum, course) {
                return sum + course.exercises
              }, 0)} exercises  </li>
            </ul>
            
        </div>
    )
}
const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
            
        }
      ]
    }
  
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'))