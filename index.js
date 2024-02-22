


const allBtn = document.getElementsByClassName('btn')


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
    btn.classList.add('text'); // Change color to gray

    // seatCount('0')
    const matchFour = updateCartIncrementCount() 
    console.log(matchFour)
    if( matchFour ===  4 ){
      btn.setAttribute('disabled', 'true')
    }
    // updateCartIncrementCount()
    updateCartDecrementCount()
    updatedTotalPrice('550')
    updateGrandTotalPrice()




  })
}







function updatedTotalPrice(value) {
  const total = getConvertedValueById("total-price")
  const totalPrice = total + parseInt(value)
  document.getElementById('total-price').innerText = totalPrice


  // const grandtotalprice 
  document.getElementById('grand-total-price').innerText = totalPrice

}

function updateGrandTotalPrice(status) {
  const previousTotal = document.getElementById("total-price").innerText;
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById("coupon-code").value;
  if (status) {
    if (couponCode == "NEW15" || couponCode == "Couple 20") {
      const discount = convertedTotal * 0.2;
      // console.log(discount)
      document.getElementById("grand-total-price").innerText =
        convertedTotal - discount;
    } else {
      alert("Invalid Coupon Code ");
      return;
    }
  } else {
    document.getElementById("grand-total-price").innerText = convertedTotal;
  }
}


// total-seat



function updateCartIncrementCount() {
  const defaultSeatCount = document.getElementById("seat-count").innerText
  const convertDefaultSeatCount = parseInt(defaultSeatCount)
  document.getElementById("seat-count").innerText = convertDefaultSeatCount + 1
  
  
  
  // 
  
  return convertDefaultSeatCount


  }

function updateCartDecrementCount() {
  const defaultSeatCount = document.getElementById("total-seat").innerText
  const convertDefaultSeatCount = parseInt(defaultSeatCount)
  document.getElementById("total-seat").innerText = convertDefaultSeatCount - 1



}


function updateCartCount() {
  const defaultCartCount = document.getElementById("seat-count").innerText;

  const convertDefaultCartCount = parseInt(defaultCartCount);
  document.getElementById("seat-count").innerText = convertDefaultCartCount + 1;
}





// let c=0
//   function seatCount( id){
//     c++
//     const seatCount=getConvertedValueById(id).innerText =c
//     console.log(seatCount )
//     console.log(c )

//   }



function getConvertedValueById(id) {
  const price = document.getElementById(id).innerText
  const convertedPrice = parseInt(price)
  return convertedPrice

}

