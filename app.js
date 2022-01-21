const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

  //Display our data
  //On click: flio cards back and forth
  //Get info for new cards from the uese
      //Create data properties for front and back of new card
      //Bind those properties to the form inputs using  v-model
  //Add new card when user hits enter or clicks button
      //Create a new card object containing new card information
      //pushes that card object in to the card array

  //Delete cards
  //Animate card flip
  //Display an error message if form fields are blank

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront:'',
      newBack:'',
      error:false
    },
    methods: {
      toggleCard:function(card){
        card.flipped=!card.flipped;
      },
      addNew:function(){
        if(!this.newFront || !this.newBack){
            this.error = true;
        }else{
          this.cards.push({
            front:this.newFront,
            back:this.newBack,
            flipped:false
          })
          this.newFront ='';
          this.newBack='';
          this.error=false;
        }
      }
    }
  });