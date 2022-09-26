export class DateInfo {
    constructor(year, month) {
        this.year = year
        this.month = month
        this.fullInfo = new Date(this.year, this.month + 1, 0)
        this.a = []
    }

    getMonth() {
        return this.fullInfo.toLocaleDateString('en-US', {month: 'long'})
    }

    getYear() {
        return this.fullInfo.toLocaleDateString('en-US', {year: "numeric"})
    }

    getDaysNumber() {
        return this.fullInfo.getDate()
    }

    getFullDayList() {
        const dayNumber = this.getDaysNumber()
        const daysList = []

        for (let i = 1; i <= dayNumber; i++) {
            const currentDay = {}
            const currentDate = new Date(this.year, this.month, i)

            currentDay.id = currentDate.getDate()
            currentDay.dayInfo = currentDate.toLocaleDateString('en-Us', {month: 'long', day: 'numeric'})
            currentDay.weekDay = currentDate.toLocaleDateString('en-Us', {weekday: "short"})
            currentDay.events = []
            daysList.push(currentDay)

        }
        return daysList
    }

    getDaysListWithEvents(events) {
        const daysList = this.getFullDayList()
        events.forEach(event => {
            const currentTask = event.date.toLocaleDateString('en-Us', {
                month: 'long',
                day: "numeric"
            })
            const suitDate = daysList.findIndex(day => {
                return day.dayInfo === currentTask
            })
            if (suitDate >= 0) {
                daysList[suitDate].events.push({
                    tittle: event.title,
                    time: event.date.toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: 'numeric',
                        timeZone: 'UTC'
                    })
                })
            }
        })
        return daysList
    }

}