function add() {
    const user = document.querySelector('input').value
    let divElement = document.querySelector('div')
    divElement.innerHTML = 'Loading...'

    axios.get('https://api.github.com/users/'+ user +'/repos')
        .then(function(response) {
            divElement.innerHTML = ''

            let ulElement = document.querySelector('div ul')
            if(ulElement != null)
                ulElement.innerHTML = ''
            else{
                ulElement = document.createElement('ul')
            }
            for(x of response.data){
                let liElement = document.createElement('li')
                let txtNode = document.createTextNode(x.name)
                
                liElement.appendChild(txtNode)
                ulElement.appendChild(liElement)
            }
            let containerElement = document.querySelector('div.container')
            containerElement.appendChild(ulElement)
        })
        .catch(function(error) {
            console.log(error);
            
            let divElement = document.querySelector('div')
            divElement.innerHTML = ''

            let message = document.createElement('div')
            let txtNode = document.createTextNode("Erro: User name doesn't exists")
            message.appendChild(txtNode)
            divElement.appendChild(message)
        })
}