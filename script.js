const date = new Date()
const currentYear = date.getFullYear()
const currentMounth = date.getMonth() + 1
const currentDay = date.getDate()

const result = document.getElementById('result')

function calculateAge() {
    const inputNumberDay = document.getElementById('day_of_birth')
    const inputNumberMonth = document.getElementById('month_of_birth')
    const inputNumberYear = document.getElementById('year_of_birth')

    const dayBirth = Number(inputNumberDay.value)
    const monthBirth = Number(inputNumberMonth.value)
    const yearBirth = Number(inputNumberYear.value)

    const inputRadioDay = document.getElementById('days')
    const inputRadioMonth = document.getElementById('months')
    const inputRadioYear = document.getElementById('years')

    if ((dayBirth <= 0 || dayBirth > 31 || monthBirth <= 0 || monthBirth > 12 || yearBirth <= 0) || dayBirth >= currentDay && monthBirth >= currentMounth && yearBirth >= currentYear) {
        alert('Data inválida!')
    } else if (inputRadioYear.checked) {
        calculateInYears(dayBirth, monthBirth, yearBirth)
    } else if (inputRadioMonth.checked) {
        calculateInMonths(dayBirth, monthBirth, yearBirth)
    } else if (inputRadioDay.checked) {
        calculateInDays(dayBirth, monthBirth, yearBirth)
    } else {
        alert('ERRO')
    }
}

function calculateInYears(dayBirth, monthBirth, yearBirth) {
    let yearsOfLife = currentYear - yearBirth
    let monthsOfLife = currentMounth - monthBirth
    let daysOfLife = currentDay - dayBirth

    if (monthsOfLife < 0) {
        monthsOfLife = 12 + monthsOfLife
        yearsOfLife--
    }

    if (daysOfLife < 0) {
        let maxDaysLastMonth

        if (currentMounth == 1) {
            maxDaysLastMonth = new Date(currentYear - 1, 12, 0).getDate()
        } else {
            maxDaysLastMonth = new Date(currentYear, currentMounth - 1, 0).getDate()
        }

        daysOfLife = maxDaysLastMonth - dayBirth + currentDay
        if (monthsOfLife == 0) {
            monthsOfLife = 11
            yearsOfLife--
        } else {
            monthsOfLife--
        }
    }


    result.innerHTML = 'Você tem '

    if (yearsOfLife == 0) {
    } else if (yearsOfLife == 1) {
        result.innerHTML += `${yearsOfLife} ano`
    } else {
        result.innerHTML += `${yearsOfLife} anos`
    }

    if (monthsOfLife == 0) {
    } else if (monthsOfLife == 1 && yearsOfLife == 0) {
        result.innerHTML += `${monthsOfLife} mês`
    } else if (monthsOfLife == 1 && yearsOfLife > 0 && daysOfLife == 0) {
        result.innerHTML += ` e ${monthsOfLife} mês`
    } else if (monthsOfLife == 1 && yearsOfLife > 0 && daysOfLife > 0) {
        result.innerHTML += `, ${monthsOfLife} mês`
    } else if (monthsOfLife > 1 && yearsOfLife == 0) {
        result.innerHTML += `${monthsOfLife} meses`
    } else if (monthsOfLife > 1 && yearsOfLife > 0 && daysOfLife == 0) {
        result.innerHTML += ` e ${monthsOfLife} meses`
    } else if (monthsOfLife > 1 && yearsOfLife > 0 && daysOfLife > 0) {
        result.innerHTML += `, ${monthsOfLife} meses`
    }

    if (daysOfLife == 0) {
        result.innerHTML += '.'
    } else if (daysOfLife == 1 && yearsOfLife == 0 && monthsOfLife == 0) {
        result.innerHTML += `${daysOfLife} dia.`
    } else if ((daysOfLife == 1)) {
        result.innerHTML += ` e ${daysOfLife} dia.`
    } else if (daysOfLife > 1 && yearsOfLife == 0 && monthsOfLife == 0) {
        result.innerHTML += `${daysOfLife} dias.`
    } else {
        result.innerHTML += ` e ${daysOfLife} dias.`
    }

    if (currentDay == dayBirth && currentMounth == monthBirth) {
        result.innerHTML += ` Feliz aniversário!!!`
    }
}

function calculateInMonths(dayBirth, monthBirth, yearBirth) {
    let monthsOfLife = (currentYear - yearBirth) * 12 + (currentMounth - monthBirth)
    let daysOfLife = currentDay - dayBirth

    if (daysOfLife < 0) {
        let maxDaysLastMonth

        if (currentMounth == 1) {
            maxDaysLastMonth = new Date(currentYear - 1, 12, 0).getDate()
        } else {
            maxDaysLastMonth = new Date(currentYear, currentMounth - 1, 0).getDate()
        }

        daysOfLife = maxDaysLastMonth - dayBirth + currentDay
        monthsOfLife--
    }

    result.innerHTML = `Você tem `

    if (monthsOfLife == 0) {
    } else if (monthsOfLife == 1) {
        result.innerHTML += `${monthsOfLife} mês`
    } else if (monthsOfLife > 1) {
        result.innerHTML += `${monthsOfLife} meses`
    }

    if (daysOfLife == 0) {
        result.innerHTML += '.'
    } else if (daysOfLife == 1 && monthsOfLife == 0) {
        result.innerHTML += `${daysOfLife} dia.`
    } else if (daysOfLife == 1 && monthsOfLife > 0) {
        result.innerHTML += ` e ${daysOfLife} dia.`
    } else if (daysOfLife > 1 && monthsOfLife == 0) {
        result.innerHTML += `${daysOfLife} dias.`
    } else if (daysOfLife > 1 && monthsOfLife > 0) {
        result.innerHTML += ` e ${daysOfLife} dias.`
    }

    if (currentDay == dayBirth && currentMounth == monthBirth) {
        result.innerHTML += ` Feliz aniversário!!!`
    }
}

function calculateInDays(dayBirth, monthBirth, yearBirth) {
    let daysOfLifeInMonthBirthAndInCurrentMonth = 0

    if (currentMounth == monthBirth && currentYear == yearBirth) {
        daysOfLifeInMonthBirthAndInCurrentMonth = currentDay - dayBirth
    } else {
        daysOfLifeInMonthBirthAndInCurrentMonth = (new Date(yearBirth, monthBirth, 0).getDate()) - dayBirth + currentDay
    }

    let daysOfLife = daysOfLifeInMonthBirthAndInCurrentMonth

    let countMonth = monthBirth + 1
    let countYear = yearBirth


    while (countMonth < currentMounth || countYear < currentYear) {
        const daysInMonth = new Date(countYear, countMonth, 0).getDate()
        daysOfLife += daysInMonth

        if (countMonth >= 12) {
            countMonth = 0
            countYear++
        }
        countMonth++
    }

    result.innerHTML = 'Você tem '

    if (daysOfLife == 1) {
        result.innerHTML += `${daysOfLife.toLocaleString('pt-br')} dia.`
    } else {
        result.innerHTML += `${daysOfLife.toLocaleString('pt-br')} dias.`
    }

}

function clearScreen() {
    result.innerHTML = ''
}


