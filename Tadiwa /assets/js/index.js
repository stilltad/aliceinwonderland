const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();


const popup = document.querySelector( '.popup' );
if ( popup ) {
  popup.addEventListener( 'click', function( ) {
    const backgroundgroundMusic = document.querySelector( 'audio' );

    if ( backgroundgroundMusic )
        backgroundgroundMusic.play( );

    popup.remove( );
    
  }, { once: true } );
}