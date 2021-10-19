// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Object factory
function pAequorFactory(id,dna){
  return  {
    specimenNum: id,
    dna,
    mutate(){
      let base= returnRandBase();
      for(let i=0; i<this.dna.length; i++){
        while( this.dna[i] === base ){
          base= returnRandBase();
        }
        this.dna[i]= base;
      }
    },
    compareDNA(pAequor){
      if(this.specimenNum === pAequor.specimenNum){
        console.log('The specimen has the same specimenNum')
      }
      let percent= 0;
      for(let i= 0; i<this.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]){
          percent++;
        }
      }
      console.log("specimen "+this.specimenNum+" and specimen "+pAequor.specimenNum+" have "+(percent/this.dna.length*100)+"% DNA in common")
    },
    willLikelySurvive(){
      let percent= 0;
      this.dna.forEach(protein => {
        if(protein === 'C' || protein === 'G'){
          percent++;
        }
      })
      if( percent/this.dna.length > 0.6 ){
        return true
      }else{
        return false
      }
    },
    complementStrand(){
      const arr=[];
      for( protein of this.dna ){
        if( protein === 'A'){
          arr.push('C')
        }else if( protein === 'C'){
          arr.push('A')
        }else if( protein === 'T'){
          arr.push('G')
        }else{
          arr.push('T')
        }
      }
      return arr
    }
  }
}

let pAequorArray= []
for(let i=0; i< 30; i++){
  pAequorArray.push(pAequorFactory(i+1,mockUpStrand()))
}

console.log(pAequorArray)
console.log(pAequorArray[0].complementStrand())