import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Calender = () => {
  return (
    <div className='text-xs my-5 font-bold mr-2 '>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    </div>
  )
}

export default Calender