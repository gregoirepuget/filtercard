let tab = [2,6,7,4,1]
//console.log(tab)
let isOrdered = false

while(isOrdered==false)
{
  isOrdered=true
  for(let i=0; i<tab.length-1;i++)
  {
    if(tab[i]>tab[i+1])
    {
      isOrdered=false
      let temp = tab[i]
      tab[i]=tab[i+1]
      tab[i+1]=temp
      //console.log(tab)
    }

  }
}
//console.log(tab)
