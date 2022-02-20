const sel = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊🏼',
        beats: 'scissors'

    },
    {
        name: 'paper',
        emoji: '🤚🏽',
        beats: 'rock'

    },
    {
        name: 'scissors',
        emoji: '✌🏻',
        beats: 'paper'

    }
]

sel.forEach(sel => {
    sel.addEventListener('click', e => {
        const selName = sel.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selName)
        makeSel(selection)
    })
})

function makeSel(selection) {
    const compSel = ramSel()
    const yourWinner = isWinner(selection, compSel)
    const compWinner = isWinner(compSel, selection)

    addSelRes(compSel, compWinner)
    addSelRes(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (compWinner) incrementScore(computerScoreSpan)
    
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelRes(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, oppSel) {
    return selection.beats === oppSel.name
}

function ramSel() {
    const ramIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[ramIndex] 
}
