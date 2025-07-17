const fortunes = [
    "You will have a day filled with pleasant surprises.",
    "A new opportunity will present itself to you soon.",
    "Be open to new ideas and experiences today.",
    "Your hard work will pay off in unexpected ways.",
    "Take time for self-care and relaxation.",
    "A long-awaited wish may come true.",
    "Focus on your goals and stay persistent.",
    "Kindness and generosity will bring you joy.",
    "Embrace challenges as opportunities for growth.",
    "Connect with loved ones and cherish your relationships."
]


// Button functionalities

const fortuneDisplay = document.getElementById('fortuneDisplay')
const themes = {
    aqua: {
        borderColor: '#008080', 
        backgroundColor: 'rgba(156, 226, 226, 1)',
        textColor: '#003333' 
    },
    olive: {
        borderColor: '#666633',
        backgroundColor: 'rgb(226, 226, 165)',
        textColor: '#4d4d00' 
    },
    brown: {
        borderColor: '#4d2a2a', 
        backgroundColor: 'rgb(170, 87, 87)',
        textColor: '#2f1c1c' 
    },
    mint: {
        borderColor: '#2e8b57',
        backgroundColor: 'rgb(188, 226, 213)',
        textColor: '#004d26' 
    }
}

function changeTheme(color) {
    const theme = themes[color]
    fortuneDisplay.style.borderColor = theme.borderColor
    fortuneDisplay.style.backgroundColor = theme.backgroundColor
    fortuneDisplay.style.color = theme.textColor
}

document.getElementById('aqua').addEventListener('click', () => changeTheme('aqua'))
document.getElementById('olive').addEventListener('click', () => changeTheme('olive'))
document.getElementById('brown').addEventListener('click', () => changeTheme('brown'))
document.getElementById('mint').addEventListener('click', () => changeTheme('mint'));



