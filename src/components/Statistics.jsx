import React from 'react'

function Statistics({ tasks }) {
  const counts = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length,
  }

  const stats = [
    { label: 'Total Tasks', value: counts.total },
    { label: 'Todo', value: counts.todo },
    { label: 'In Progress', value: counts.inProgress },
    { label: 'Done', value: counts.done },
  ]

  return (
    <section>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-5'>
        {stats.map(({ label, value }) => (
          <div key={label} className='flex justify-between items-center p-10 bg-[#0b0649f5] text-white rounded-lg'>
            <h2 className='text-[20px] font-heading'>{label}</h2>
            <p className='text-2xl font-bold font-heading'>{value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Statistics
