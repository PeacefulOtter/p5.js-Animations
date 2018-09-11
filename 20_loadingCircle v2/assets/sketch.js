
let nParts;
let start, end;
let posArr;

function setup() {
  createCanvas( windowWidth, windowHeight );
  nParts = 20;
  start  = 0;
  end    = ( ( 2 * PI ) / nParts );
  posArr = new Array();

  strokeWeight( 70 );
  translate( windowWidth / 2, windowHeight / 2 );

  for ( let i = 0; i <= nParts; i++ ) {
    start += ( ( 2 * PI ) / (nParts - 1) );
    end   += ( ( 2 * PI ) / (nParts - 1) );
    posArr.push( [ start, end ] );
  }
}

function draw() {
  background( 255 );
  translate( windowWidth / 2, windowHeight / 2 );

  for ( let i = 0; i <= nParts; i++ ) {
    stroke( 1400 / ( i + 0 ) );
    arc( 0, 0, 200, 200, posArr[ i ][ 0 ], posArr[ i ][ 1 ] );
    posArr[ i ][ 0 ] += 0.08;
    posArr[ i ][ 1 ] += 0.08;
  }

}





