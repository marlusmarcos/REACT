import { generateDatesFromYearBeginng } from "../utils/generate-date-from-Begin"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 
'S', 
'T', 
'Q', 
'Q', 
'S', 
'S' ]

const SumarydDates = generateDatesFromYearBeginng();
const minimumSumaryDates = 18*7; //18 weeks
const amountOfDaystoFill = minimumSumaryDates - SumarydDates.length

export function SumaryTable () {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map ((weekDay, i) => {
                    return (
                        <div
                        key = {`${weekDay} - ${i}`} 
                        className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                            {weekDay}
                        </div>
                    )
                })}
    
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {SumarydDates.map(date =>{
                    return <HabitDay key={date.toString()}/>
                })}
                 {amountOfDaystoFill > 0 && Array.from({length: amountOfDaystoFill}).map((_,i) => {
                    return (
                        <div key =  {i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed">
                        </div>
                    )
                 })}
                        
            </div>
        </div>
    )
}