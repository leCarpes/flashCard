function createCard(category, query, reply){
    let container = document.getElementById('container')
    let card = document.createElement('article')
    card.className = 'card';

    card.innerHTML = `
    
                <div class="cardContent">
                    <h3>${category}</h3>

                    <div class="cardContentQuery"> 
                        <p>${query}</p>
                    </div>

                    <div class="cardContentReply"> 
                        <p>${reply}</p>       
                    </div>
                </div>
                `

    let replyVisible = false

    function rotateCard(){
        replyVisible = !replyVisible
        card.classList.toggle('active', replyVisible)
    }

    card.addEventListener('click', rotateCard)

    container.appendChild(card);
}