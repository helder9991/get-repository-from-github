function adicionar() {
    const user = document.querySelector('input').value
    
    axios.get('https://api.github.com/users/'+ user +'/repos')
        .then(function(response) {
            
            var ulElement = document.querySelector('div ul')
            ulElement.innerHTML = ''
            
            for(x of response.data){
                var liElement = document.createElement('li')
                var txtNode = document.createTextNode(x.name)
                
                liElement.appendChild(txtNode)
                ulElement.appendChild(liElement)
            }
            var containerElement = document.querySelector('div.container')
            containerElement.appendChild(ulElement)
        })
}