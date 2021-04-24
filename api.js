document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = function() {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=2882db5a26ad29393e25625cb7fd7590')
        .then(response => response.json())
        .then(data => {
            let currency = document.querySelector('#currency').value.toUpperCase()
            const rate = data.rates[currency]

            if (rate !== undefined) {
                document.querySelector('#result').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}`
            } else {
                document.querySelector('#result').innerHTML = 'Invalid currency'
            }
        
        })
        .catch(error => {
            console.log('error: ', error);
        })

        
        return false;
    }
    
})
