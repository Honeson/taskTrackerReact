import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
      const [tasks, setTasks] = useState([
              {
                  id: 1,
                  text: 'HCF Admins Meeting',
                  day: 'Jun 7th at 8:00pm',
                  reminder: true
              },
              {
                  id: 2,
                  text: 'CDS Meeting',
                  day: 'Jun 10th at 8:00am',
                  reminder: true
              },
              {
                  id: 3,
                  text: 'Go to church',
                  day: 'Jun 13th at 7:00am',
                  reminder: false
              }
      ])

      //Function to delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  }

//Function to toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks = {tasks} 
      onDelete={deleteTask} onToggle = {toggleReminder} /> : 'No Task to show yet'}
      
    </div>
  );
}



export default App;
