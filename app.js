// SELECTORS
const mktContainer = document.getElementById('mktContainer');
const moreBtn = document.getElementById('mBtn');
const greetingTitle = document.getElementById('gTitle');
const greetingMore = document.getElementById('gMoreInfo');




moreBtn.addEventListener('click', ()=>{
    theToggler (moreBtn,'mBtn');
    theToggler (moreBtn,'moreBtnReveal');
    
    // Marketing Container Toggling
    theToggler(mktContainer,'marketingContainer');
    theToggler(mktContainer,'marketingContainerReveal');
    
    // Greeting Title Toggling
    theToggler(greetingTitle,'gTitle');
    theToggler(greetingMore,'gMoreInfo');
    theToggler(greetingMore, 'gMoreInfoReveal');
        
    
});

function theToggler (itemName,className){
    itemName.classList.toggle(className);
};