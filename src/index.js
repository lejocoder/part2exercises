import React from 'react';
import ReactDOM from 'react-dom';
// part 2.4, 2.5 done , already made it a seperate module imported by app

// 0 acts as the sums, number would be the item for each iteration when we reduce
const Course = (props) => {
    const myCourses = props.course.parts
    return (
        <div>
            <h1>{props.course.name}</h1>
            <ul>
                {myCourses.map(course => <li key = {course.id}>{course.name + " " + course.exercises}</li>)} 
                <li key = "total"><strong> total of {myCourses.reduce(function(sum, course) {
                return sum + course.exercises
              }, 0)} exercises  </strong></li>
            </ul>
            
        </div>
    )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
    return (
      <div>
        <Course course={courses[0]} />
        <Course course={courses[1]} />
      </div>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'))