"use client"

import * as React from "react"
import { addDays, format, isToday } from "date-fns"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function RoomCalendar() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3)
  })

  // Disable past dates
  const disabledDays = { before: new Date() }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1 pb-4">
        {date?.from && date?.to ? (
          <>
            <h3 className="text-lg font-medium">Your Stay</h3>
            <p className="text-sm text-muted-foreground">
              {`${format(date.from, "PPP")} - ${format(date.to, "PPP")}`}
            </p>
            <p className="text-sm text-muted-foreground">
              {`${Math.ceil((date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24))} nights`}
            </p>
          </>
        ) : (
          <h3 className="text-lg font-medium">Select your stay dates</h3>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          disabled={disabledDays}
          className="rounded-md"
          classNames={{
            months: "flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: cn(
              "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent",
              "[&:has([aria-selected].day-range-end)]:rounded-r-md",
              "[&:has([aria-selected].day-range-start)]:rounded-l-md"
            ),
            day: cn(
              "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
            ),
            day_range_start: "day-range-start",
            day_range_end: "day-range-end",
            day_selected:
              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "text-muted-foreground opacity-50",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
          components={{
            DayContent: ({ date: dayDate, ...props }) => (
              <div
                {...props}
                className={cn(
                  "h-9 w-9 p-0 font-normal flex items-center justify-center",
                  isToday(dayDate) && "font-semibold bg-accent/50 rounded-full"
                )}
              >
                {format(dayDate, "d")}
              </div>
            ),
          }}
        />
      </CardContent>
    </Card>
  )
}