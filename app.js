// const axios = require('axios').default;
const Key = 'owyoRxVRwY5VFh04MPfIHg==FDVCLpEIG7YcTz7H'
const main = document.querySelector('main');
const headers = { headers: { 'X-Api-Key': Key } };
const url = 'https://api.api-ninjas.com/v1/randomword';
const button = document.querySelector('button');
const header = document.querySelector('h1');

button.addEventListener('click', () => {
    getNewWord();
})

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

const getNewWord = async () => {
    try {
        const res = await axios.get(url, headers);
        let word = res.data.word;
        word = word.at(-1) === 's' ? word + 'es' : word + 's';
        newWord = `${word} 2.0`;
        header.innerText = titleCase(newWord);
    } catch (e) {
        console.log('error', e);
    }
}
