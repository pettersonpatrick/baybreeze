const mktContainer = document.getElementById('mktContainer');
const moreBtn = document.getElementById('mBtn');
moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('moreBtn');
    moreBtn.classList.toggle('moreBtnReveal');
    mktContainer.classList.toggle('marketingContainer');
    mktContainer.toggle('marketingContainerReveal');
    
    
});