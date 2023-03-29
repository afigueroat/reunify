import React from 'react'
import '../styles/calendar.css'
import { CalendarEvent } from './types'

interface CalendarProps {
  date: Date
  events: CalendarEvent[]
  onEventClick: (event: CalendarEvent) => void
}

const Calendar: React.FC<CalendarProps> = ({ date, events, onEventClick }) => {
  const monthDays = React.useMemo(() => {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate()
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const days: (Date | null)[] = Array(startDay === 0 ? 6 : startDay - 1).fill(
      null
    )

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(date.getFullYear(), date.getMonth(), i))
    }

    while (days.length % 7 !== 0) {
      days.push(null)
    }

    return days
  }, [date])

  const today = new Date()
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const getDayClasses = (day: Date | null) => {
    if (!day) return 'day day--empty'
    const classes = ['day']
    if (day.getMonth() !== date.getMonth()) {
      classes.push('day--muted')
    }
    if (day.getDay() === 6 || day.getDay() === 0) {
      classes.push('day--weekend')
    }
    if (day.getTime() === today.getTime()) {
      classes.push('day--today')
    }
    return classes.join(' ')
  }

  return (
    <table className="calendar">
      <thead>
        <tr>
          {weekDays.map((weekDay) => (
            <th key={weekDay}>{weekDay}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: monthDays.length / 7 }, (_, i) => i).map(
          (rowIndex) => (
            <tr key={rowIndex}>
              {monthDays
                .slice(rowIndex * 7, rowIndex * 7 + 7)
                .map((day, cellIndex) => {
                  const eventsForDay = day
                    ? events.filter((event) => {
                        const eventDate = event.event_date.replace(/-/g, '/')
                        const eventDay = new Date(eventDate)
                        return (
                          eventDay.getDate() === day.getDate() &&
                          eventDay.getMonth() === day.getMonth() &&
                          eventDay.getFullYear() === day.getFullYear()
                        )
                      })
                    : []
                  return (
                    <td key={cellIndex} className={getDayClasses(day)}>
                      {day && (
                        <>
                          <div>{day.getDate()}</div>
                          <div className="day-events">
                            {eventsForDay.map((event) => (
                              <div
                                key={event.event_id}
                                className="event"
                                onClick={() => onEventClick(event)}
                              >
                                {event.event_name}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </td>
                  )
                })}
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}

export default Calendar
