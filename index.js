const domStrings = {
   fetchBtn : document.getElementById('fetch-btn'),
   removeBtn : document.getElementById('remove-btn'),
   footer : document.getElementById('footer'),

}

domStrings.fetchBtn.addEventListener('click', handleBtnClick)


const callbackForFetchedValues = (arrOfdata) => {
    console.log(arrOfdata)
    
    // create wrapper element 

    const unorderedList = document.createElement("ul")
    // create list items inside that element by iterating through list 

    unorderedList.setAttribute('id', 'doodoo')
     
    

    document.body.insertBefore(unorderedList, domStrings.footer)

    

    arrOfdata.forEach(post => {
        // create li 

        const li = document.createElement('li')

        const pID = document.createElement('p')

            pID.innerText = post.id
        
        const pBody = document.createElement('p')

         // give it content 

            pBody.innerText = post.title
       
        li.appendChild(pID)
        
        li.appendChild(pBody)
       

        // append to unordered list

        unorderedList.appendChild(li)

        li.classList.add('li')

    })
}




async function handleBtnClick(){
   
    console.log('fetching data')

    const url = 'https://jsonplaceholder.typicode.com/posts'

    const result = await fetch(url, {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        },
    }).then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        return data;
    })
    .catch(err => console.log(err))

    callbackForFetchedValues(result)
    
}



domStrings.removeBtn.addEventListener('click', handleRemoveBtn);

function handleRemoveBtn(){
    
    document.getElementById('doodoo').remove();

}