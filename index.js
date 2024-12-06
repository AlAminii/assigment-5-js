function getInputValueById (id){
return parseFloat(document.getElementById(id).value)

}

function getValueByText (id){
    return parseFloat(document.getElementById(id).innerText)
}


// ---------

document.getElementById('first-card-btn').addEventListener('click', function(){
    let firstDonetValue = getInputValueById('first-donet-value')
    let firstDonetMoney = getValueByText('first-donet-money')
    let total = firstDonetValue + firstDonetMoney;
let navMoney = getValueByText('nav-money')
let historySection = document.getElementById('history-section');
        let historyItem = document.createElement('div');
        historyItem.classList.add('bg-[#F9F7F3]', 'p-4', 'mb-4', 'rounded', 'shadow-md');
        historyItem.innerHTML = `
            <p class="text-xl font-bold">Donation Amount: <span class="text-green-600">${firstDonetValue} BDT</span></p>
            <p class="text-gray-600">Previous Total: ${firstDonetMoney} BDT</p>
            <p class="text-gray-600">New Total: ${total} BDT</p>
        `;

        // Prepend the new history item
        historySection.prepend(historyItem);
let nvamoneySet = navMoney - firstDonetValue
document.getElementById('nav-money').innerText = nvamoneySet
   document.getElementById('first-donet-money').innerText = total
   document.getElementById('my_modal_8').classList.add('modal-open');
})
// ------modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    // Hide the modal
    document.getElementById('my_modal_8').classList.remove('modal-open');
  });
//   modal


let historyTab = document.getElementById('history-tab');
let donetTab = document.getElementById('donation-tab')
let cardSection = document.getElementById('card-section-from')
let historySection = document.getElementById('history-section')
historyTab.addEventListener('click', function(){
   historyTab.classList.add('bg-[#B4F461]')
   donetTab.classList.remove('bg-[#B4F461]')
   cardSection.classList.add('hidden')
   historySection.classList.remove('hidden')
})

donetTab.addEventListener('click', function(){
    historyTab.classList.remove('bg-[#B4F461]')
    donetTab.classList.add('bg-[#B4F461]')
    cardSection.classList.remove('hidden')
    historySection.classList.add('hidden')
 })
