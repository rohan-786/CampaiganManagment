export const reformatItemRowsData=(data)=>{
    if(!data){
        return null;
    }
    let reFormatedData = []
    data.map((item)=>{
        let date = {
            text : item.date,
            subText : item.noofDaysDifference ? item.noofDaysDifference : 0
        };
        let campaign ={
            imgClass : item.image_url,
            text:item.name,
            subText:item.region
        };
        let pricing = {
            logoUrl:'price',
            text:'View Pricing'
        };
        let actions = [
            {logo:'file',
             text:'CSV',
             addEventHandler : false},
            {logo:'statistics',
            text:'Report',
            addEventHandler : false},
            {logo:'calendar',
            text:'Schedule Again',
            addEventHandler : true}
        ];
       let finalItemObj = {
           "date":date,
           "campaing":campaign,
           "pricing":pricing,
           "actions":actions
       }         
       reFormatedData.push(finalItemObj);
    })

    return reFormatedData;

}