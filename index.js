function getInputValueById (id){
return parseFloat(document.getElementById(id).value)

}

function getValueByText (id){
    return parseFloat(document.getElementById(id).innerText)
}


// ---------

document.getElementById('first-card-btn').addEventListener('click', function(){
    console.log('kaj hoi')
    let firstDonetValue = getInputValueById('first-donet-value')
    let firstDonetMoney = getValueByText('first-donet-money')
    let firstCardHeadLine = document.getElementById('first-card-headline').innerText
    let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
    if(firstDonetValue> 0){
        let total = firstDonetValue + firstDonetMoney;
        console.log(total)
        let navMoney = getValueByText('nav-money')
        let historySection = document.getElementById('history-section');
                let historyItem = document.createElement('div');
                historyItem.classList.add('bg-[#F9F7F3]', 'p-4', 'mb-4', 'rounded', 'shadow-md');
                historyItem.innerHTML = `
                     <p class="text-xl font-bold">${firstDonetValue} Tk is ${firstCardHeadLine} 
                  
                    </p>
                    <p class="text-gray-600"> ${formattedDate}</p>
                `;
        
                // Prepend the new history item
                historySection.prepend(historyItem);
        let nvamoneySet = navMoney - firstDonetValue
        document.getElementById('nav-money').innerText = nvamoneySet
           document.getElementById('first-donet-money').innerText = total
           document.getElementById('my_modal_8').classList.add('modal-open');
    }
    else{
        alert('your value is not valid')
    }
    
})
// ------modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    // Hide the modal
    document.getElementById('my_modal_8').classList.remove('modal-open');
  });


document.getElementById('second-card-btn').addEventListener('click', function(){
    let firstDonetValue = getInputValueById('second-donet-value')
    let firstDonetMoney = getValueByText('second-donet-money')
    let secondheadlinetext = document.getElementById
    ('second-card-headline').innerText;
    let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
    if(firstDonetValue> 0){
        let total = firstDonetValue + firstDonetMoney;
        let navMoney = getValueByText('nav-money')
        let historySection = document.getElementById('history-section');
                let historyItem = document.createElement('div');
                historyItem.classList.add('bg-[#F9F7F3]', 'p-4', 'mb-4', 'rounded', 'shadow-md');
                historyItem.innerHTML = `
                     <p class="text-xl font-bold">${firstDonetValue} Tk is ${secondheadlinetext} 
                  
                    </p>
                    <p class="text-gray-600"> ${formattedDate}</p>
                `;
        
                // Prepend the new history item
                historySection.prepend(historyItem);
        let nvamoneySet = navMoney - firstDonetValue
        document.getElementById('nav-money').innerText = nvamoneySet
           document.getElementById('second-donet-money').innerText = total
           document.getElementById('my_modal_8').classList.add('modal-open');
    }
    else{
        alert('your value is not valid')
    }
    
})
// ------modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    // Hide the modal
    document.getElementById('my_modal_8').classList.remove('modal-open');
  })

//   ---------------3rcard

document.getElementById('third-card-btn').addEventListener('click', function(){
    let firstDonetValue = getInputValueById('third-donet-value')
    let firstDonetMoney = getValueByText('third-donet-money')
    let Thirdheadlinetext = document.getElementById
    ('third-card-headline').innerText;
    let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
    if(firstDonetValue> 0){
        let total = firstDonetValue + firstDonetMoney;
        let navMoney = getValueByText('nav-money')
        let historySection = document.getElementById('history-section');
                let historyItem = document.createElement('div');
                historyItem.classList.add('bg-[#F9F7F3]', 'p-4', 'mb-4', 'rounded', 'shadow-md');
                historyItem.innerHTML = `
                    <p class="text-xl font-bold">${firstDonetValue} Tk is ${Thirdheadlinetext} 
                  
                    </p>
                    <p class="text-gray-600"> ${formattedDate}</p>
                    
                `;
        
                // Prepend the new history item
                historySection.prepend(historyItem);
        let nvamoneySet = navMoney - firstDonetValue
        document.getElementById('nav-money').innerText = nvamoneySet
           document.getElementById('third-donet-money').innerText = total
           document.getElementById('my_modal_8').classList.add('modal-open');
    }
    else{
        alert('positive number input please')
    }
    
})
// ------modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    // Hide the modal
    document.getElementById('my_modal_8').classList.remove('modal-open');
  })

  let historyTab = document.getElementById('history-tab');
  let donetTab = document.getElementById('donation-tab');
  let cardSection = document.getElementById('card-section-from');
  let historySection = document.getElementById('history-section');
  
  historyTab.addEventListener('click', function () {
      // Add background color and text color for the clicked tab
      historyTab.classList.add('bg-lime-500', 'text-black');
      donetTab.classList.remove('bg-lime-500', 'text-black');
      
      // Toggle visibility of the sections
      cardSection.classList.add('hidden');
      donetTab.classList.add('bg-gray-300')
      historySection.classList.remove('hidden');
  });
  
  donetTab.addEventListener('click', function () {
      donetTab.classList.add('bg-lime-500', 'text-black');
      historyTab.classList.remove('bg-lime-500', 'text-black');
      
      // Toggle visibility of the sections
      cardSection.classList.remove('hidden');

      historySection.classList.add('hidden');
  });
  


