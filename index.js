


const allBtn = document.getElementsByClassName('btn')

let seatCount = 1
for (const btn of allBtn) {


    btn.addEventListener('click', function (e) {

        const nameOfTicket = e.target.innerText



        const selectedSeatContainer = document.getElementById("selected-seat-container")
        const div = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = nameOfTicket
        p2.innerText = 'Economoy'
        p3.innerText = '550'

        div.classList.add('selected-seats')
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)


        selectedSeatContainer.appendChild(div)
        btn.setAttribute('disabled', 'true')
        btn.style.backgroundColor = "green"; // Change color to gray


        updatedTotalPrice('550')
       console.log( updateGrandTotalPrice()  )
   

    })
}




function updatedTotalPrice(value) {
    const total = getConvertedValueById("total-price")
    const totalPrice = total + parseInt(value)
    document.getElementById('total-price').innerText = totalPrice


    // const grandtotalprice 
    document.getElementById('grand-total-price').innerText=totalPrice

}



function updateGrandTotalPrice(status) {

    console.log(status)
if(status){
    if (status == 'NEW15' || 'couple20'){

    }
    else {
        alert("Invalid Coupon Code No Discount");
        return;
      }

}else{
alert('tttttt')
}
    
    const total = getConvertedValueById("total-price")
    // const grandtotalprice 
    document.getElementById('grand-total-price').innerText=total-100/20

}





function getConvertedValueById(id) {
    const price = document.getElementById(id).innerText
    const convertedPrice = parseInt(price)
    return convertedPrice

}

