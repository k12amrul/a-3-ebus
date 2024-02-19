


const allBtn =document.getElementsByClassName('btn')

for( const btn of allBtn ){
    console.log( btn)

    btn.addEventListener( 'click'  , function( ) {
        console.log('cccccccccccccc')
        // btn.setAttribute('disabled' ,'true' )
        btn.style.backgroundColor = "#CCCCCC"; // Change color to gray
        // btn.disabled = true; // Disable the button

    })
}