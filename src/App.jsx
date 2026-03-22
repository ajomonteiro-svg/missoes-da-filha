
import React, { useState } from 'react'

const baseTasks = [
  { id: 1, name: '🛏️ Arrumar a cama', points: 1 },
  { id: 2, name: '🪥 Escovar os dentes', points: 1 },
  { id: 3, name: '🧸 Arrumar brinquedos', points: 1 },
  { id: 4, name: '🎒 Organizar mochila', points: 3 }
];

export default function App() {
  const [tasks, setTasks] = useState(baseTasks.map(t => ({ ...t, done: false })));
  const totalPoints = tasks.filter(t => t.done).reduce((acc, t) => acc + t.points, 0);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#e91e63' }}>🌟 Missões da Filha</h1>
      {tasks.map(task => (
        <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '10px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <span style={{ fontSize: '18px' }}>{task.name}</span>
          <button onClick={() => toggleTask(task.id)} style={{ fontSize: '20px', background: task.done ? '#e91e63' : 'white', borderRadius: '50%', padding: '8px', border: '2px solid #e91e63', color: task.done ? 'white' : '#e91e63' }}>
            {task.done ? '✔️' : '❌'}
          </button>
        </div>
      ))}
      <div style={{ marginTop: '20px', padding: '15px', background: '#ffb6c1', borderRadius: '12px', textAlign: 'center', fontSize: '22px', fontWeight: 'bold' }}>
        ⭐ Pontos: {totalPoints}
      </div>
    </div>
  );
}
