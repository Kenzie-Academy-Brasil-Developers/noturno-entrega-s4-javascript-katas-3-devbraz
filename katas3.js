const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(arr, title) {

    const result = document.getElementById('results')

    result.innerHTML = ""

    const titleKata = document.createElement('h2')
    titleKata.innerHTML = title

    const paragraphResult = document.createElement('p')
    paragraphResult.innerHTML = `${arr.join(', ')}.`

    result.appendChild(titleKata)
    result.appendChild(paragraphResult)

}

function showResultsTotal(arr, title) {

    const result = document.getElementById('results')

    result.innerHTML = ""

    const titleKata = document.createElement('h2')
    titleKata.innerHTML = title

    const paragraphResult = document.createElement('p')
    paragraphResult.innerHTML = arr

    result.appendChild(titleKata)
    result.appendChild(paragraphResult)

}

function kata1() {

    // implemente o código do kata 1 aqui
    let number = []
    
    for (let counter = 1; counter <= 25; counter++) {

        number.push(counter)
    
    }

    showResults(number, 'Kata 1')

}

const buttonKata1 = document.getElementById('kata1')
buttonKata1.addEventListener('click', kata1)

function kata2() {

    // implemente o código do kata 2 aqui
    let number = []
    
    for (let counter = 25; counter >= 1; counter--) {

        number.push(counter)
    
    }

    showResults(number, 'Kata 2')

}

const buttonKata2 = document.getElementById('kata2')
buttonKata2.addEventListener('click', kata2)

function kata3() {
    // implemente o código do kata 3 aqui
    let number = []
    
    for (let counter = -1; counter >= -25; counter--) {

        number.push(counter)
    
    }

    showResults(number, 'Kata 3')

}

const buttonKata3 = document.getElementById('kata3')
buttonKata3.addEventListener('click', kata3)

function kata4() {
    // implemente o código do kata 4 aqui
    let number = []
    
    for (let counter = -25; counter <= -1; counter++) {

        number.push(counter)
    
    }

    showResults(number, 'Kata 4')

}

const buttonKata4 = document.getElementById('kata4')
buttonKata4.addEventListener('click', kata4)

function kata5() {
    // implemente o código do kata 5 aqui
    let number = []
    
    for (let counter = 25; counter >= -25; counter--) {

        if (counter % 2 === 1 || counter % 2 === -1 ) {

            number.push(counter)

        }
    
    }

    showResults(number, 'Kata 5')

}

const buttonKata5 = document.getElementById('kata5')
buttonKata5.addEventListener('click', kata5)

function kata6() {
    // implemente o código do kata 6 aqui
    let number = []
  
    for (let counter = 1; counter <= 100; counter++) {

        if (counter % 3 === 0) {

            number.push(counter)

        }

    }

    showResults(number, 'Kata 6')

}

const buttonKata6 = document.getElementById('kata6')
buttonKata6.addEventListener('click', kata6)

function kata7() {
    // implemente o código do kata 7 aqui
    let number = []
  
    for (let counter = 1; counter <= 100; counter++) {

        if (counter % 7 === 0) {

            number.push(counter)

        }

    }

    showResults(number, 'Kata 7')

}

const buttonKata7 = document.getElementById('kata7')
buttonKata7.addEventListener('click', kata7)

function kata8() {
    // implemente o código do kata 8 aqui
    let number = []
  
    for (let counter = 100; counter >= 1; counter--) {

        if (counter % 3 === 0 || counter % 7 === 0) {

            number.push(counter)

        }

    }

    showResults(number, 'Kata 8')

}

const buttonKata8 = document.getElementById('kata8')
buttonKata8.addEventListener('click', kata8)

function kata9() {
    // implemente o código do kata 9 aqui
    let number = []
  
    for (let counter = 1; counter <= 100; counter++) {

        if (counter % 5 === 0 && counter % 2 === 1) {

            number.push(counter)

        }

    }

    showResults(number, 'Kata 9')

}

const buttonKata9 = document.getElementById('kata9')
buttonKata9.addEventListener('click', kata9)

function kata10() {
    // implemente o código do kata 10 aqui
    showResults(sampleArray, 'Kata 10')

}

const buttonKata10 = document.getElementById('kata10')
buttonKata10.addEventListener('click', kata10)

function kata11() {
    // implemente o código do kata 11 aqui

    let number = []

    for (let counter = 0; counter <= sampleArray.length; counter++) {

        if (sampleArray[counter] % 2 === 0) {

            number.push(sampleArray[counter])

        }

    }

    showResults(number, 'Kata 11')

}

const buttonKata11 = document.getElementById('kata11')
buttonKata11.addEventListener('click', kata11)

function kata12() {
    // implemente o código do kata 12 aqui
    let number = []

    for (let counter = 0; counter <= sampleArray.length; counter++) {

        if (sampleArray[counter] % 2 === 1) {

            number.push(sampleArray[counter])

        }

    }

    showResults(number, 'Kata 12')

}

const buttonKata12 = document.getElementById('kata12')
buttonKata12.addEventListener('click', kata12)

function kata13() {
    // implemente o código do kata 13 aqui
    let number = []

    for (let counter = 0; counter <= sampleArray.length; counter++) {

        if (sampleArray[counter] % 8 === 0) {

            number.push(sampleArray[counter])

        }

    }

    showResults(number, 'Kata 13')
}

const buttonKata13 = document.getElementById('kata13')
buttonKata13.addEventListener('click', kata13)

function kata14() {
    // implemente o código do kata 14 aqui
    let number = []

    for (let counter = 0; counter <= sampleArray.length; counter++) {

            number.push(sampleArray[counter]*sampleArray[counter])

    }

    number.pop()

    showResults(number, 'Kata 14')
}

const buttonKata14 = document.getElementById('kata14')
buttonKata14.addEventListener('click', kata14)

function kata15() {
    // implemente o código do kata 15 aqui
    let number = []
    let sum = 0

    for (let counter = 1; counter <= 20; counter++) {

        number.push(counter)

    }

    for (let counter = 0; counter < number.length; counter++) {

        sum += number[counter]
        
    }

    showResultsTotal(sum, 'Kata 15')

}

const buttonKata15 = document.getElementById('kata15')
buttonKata15.addEventListener('click', kata15)

function kata16() {
    // implemente o código do kata 16 aqui
    let sum = 0

    for (let counter = 0; counter < sampleArray.length; counter++) {

        sum += sampleArray[counter]

    }

    showResultsTotal(sum, 'Kata 16')

}

const buttonKata16 = document.getElementById('kata16')
buttonKata16.addEventListener('click', kata16)

function kata17() {
    // implemente o código do kata 17 aqui

    let smallestNumber = sampleArray[0];
    
    for(let counter = 0; counter < sampleArray.length; counter++) {

        if(sampleArray[counter] < smallestNumber) {
            smallestNumber = sampleArray[counter];
        }
        
    }

    showResultsTotal(smallestNumber, 'Kata 17')

}

const buttonKata17 = document.getElementById('kata17')
buttonKata17.addEventListener('click', kata17)

function kata18() {
    // implemente o código do kata 18 aqui
    let highestNumber = sampleArray[0];
    
    for(let counter = 0; counter < sampleArray.length; counter++) {

        if(sampleArray[counter] > highestNumber) {
            highestNumber = sampleArray[counter];
        }
        
    }

    showResultsTotal(highestNumber, 'Kata 18')

}

const buttonKata18 = document.getElementById('kata18')
buttonKata18.addEventListener('click', kata18)

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
