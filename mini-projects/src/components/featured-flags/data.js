

const dummyApiResponse = {
    showLightAndDarkMode:false,
    showTicTacToe:true,
    showRandomColorGenerator: false,
    showAccordian : false,
    showTreeView:false,
}

function featureFlagsDataServiceCall(){
  
    return new Promise ((resolve,reject)=>{
    if(dummyApiResponse)setTimeout(resolve(dummyApiResponse),500)
    else{
        reject("Some error occurred, Please try again")
    }
   })
}

export default featureFlagsDataServiceCall