// MARKETING CONTAINER SELECTORS
const mktContainer = document.getElementById('mktContainer');
const moreBtn = document.getElementById('mBtn');
const greetingTitle = document.getElementById('gTitle');
const greetingMore = document.getElementById('gMoreInfo');

// EXTRA SERVICES SELECTORS
// ESSENTIAL CLEANING
const essentialCleaningCard = document.getElementById('card-5');
const essentialCleaningBtn = document.getElementById('mBtnc-5');
const essentialCleaningTitle = document.getElementById('title5');
const essentialCleaningReveal = document.getElementById('title5Reveal');

// FULL DEEP CLEANING
const fullDeepCleaningCard = document.getElementById('card-6');
const fullDeepCleaningBtn = document.getElementById('mBtnc-6');
const fullDeepCleaningTitle = document.getElementById('title6');
const fullDeepCleaningReveal = document.getElementById('title6Reveal');

// BREEZE BUDGET
const breezeBudgetCard = document.getElementById('card-7');
const breezeBudgetBtn = document.getElementById('mBtnc-7');
const breezeBudgetTitle = document.getElementById('title7');
const breezeBudgetReveal = document.getElementById('title7Reveal');

// CLASS TOGGLER FUNCTION
function theToggler (itemName,className){
    itemName.classList.toggle(className);
};

// PRESENTATION CONTAINER MORE BTN
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

// SERVICES SECTION BUTTONS
// ESSENTIAL CLEANING CARD #5
essentialCleaningBtn.addEventListener('click',()=>{
    // BUTTONS INTERACTION
    theToggler(essentialCleaningBtn,'xServBtnsReveal');

    // CARDS INTERACTION
    theToggler(essentialCleaningCard, 'lobbyCards');
    theToggler(essentialCleaningCard, 'xSReveal');

    // PARAGRAPH INTERACTION
    theToggler(essentialCleaningTitle, 'hideTitle');
    theToggler(essentialCleaningReveal,'hideTitle');
    theToggler(essentialCleaningReveal, 'paragraphReveal');
    
});

// FULL DEEP CLEANING CARD #6
fullDeepCleaningBtn.addEventListener('click', ()=>{
    // BUTTONS INTERACTION
    theToggler(fullDeepCleaningBtn,'xServBtnsReveal');

    // CARD INTERACTION
    theToggler(fullDeepCleaningCard,'lobbyCards');
    theToggler(fullDeepCleaningCard,'xSReveal');

    // PARAGRAPH INTERACTION
    theToggler(fullDeepCleaningTitle,'hideTitle');
    theToggler(fullDeepCleaningReveal,'hideTitle');
    theToggler(fullDeepCleaningReveal,'paragraphReveal');
});

// BREEZE BUDGET CARD #7
breezeBudgetBtn.addEventListener('click', ()=>{
    // BUTTONS INTERACTION
    theToggler(breezeBudgetBtn,'xServBtnsReveal');

    // CARD INTERACTION
   theToggler(breezeBudgetCard,'lobbyCards');
   theToggler(breezeBudgetCard,'xSReveal');

   // PARAGRAPH INTERACTION
   theToggler(breezeBudgetTitle,'hideTitle');
   theToggler(breezeBudgetReveal,'hideTitle');
   theToggler(breezeBudgetReveal, 'paragraphReveal');
});



