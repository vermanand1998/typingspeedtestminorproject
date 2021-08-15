const setOfWords=[
    "A paragraph is a number of sentences grouped together and relating to one topic. Or, a group of related sentences that develop a single point"
    ,"This definition shows that the paragraphs of compositions are not mere arbitrary divisions. The division of a chapter into paragraphs must be made according to the changes of ideas introduced",
    "There is therefore no rule as to the length of a paragraph",
    " It may be short or long according to the necessity of the case. A paragraph may consist of a single sentence or of many sentence"
];
const msg=document.getElementById("msg");
const typeWords=document.getElementById("myWords");
const btn=document.getElementById("btn");
let startTime,endTime;

const playGame = ()=>{
let randomNumber=Math.floor(Math.random()*setOfWords.length);
msg.innerText=setOfWords[randomNumber];
let date=new Date();
startTime=date.getTime();
btn.innerText="Done";
};
const endPlay=()=>{
let date=new Date();
endTime=date.getTime();
let totalTime=((endTime-startTime)/1000);
let totalStr=typeWords.value;
let wordCount=wordCounter(totalStr);
let speed=Math.round((wordCount/totalTime)*60);
let finalMsg="you typed "+speed+" words per minutes. ";
finalMsg = finalMsg+ checkingError(msg.innerText,totalStr);
msg.innerText=finalMsg;
}
const checkingError = (str1, str2)=>{
   let words1=str1.split(" ");
   let words2=str2.split(" ");
   let count=0;
     

   words1.forEach(function(item, index){
       if(item==words2[index]){
           count++;
       }
   })
   let errorWords=(words1.length-count);
   return (" "+count +" correct out of "+words1.length+" words and the total number of error are "+errorWords+".");
}
const wordCounter=(str)=>{
let response=str.split(" ").length;
console.log(response);
return response;
}
btn.addEventListener('click',function(){
if(this.innerText=='Start'){
    typeWords.disabled=false;
    playGame();
}
else if(this.innerText=="Done"){
    typeWords.disabled=true;
    btn.innerText="Start";
    endPlay();
}
})