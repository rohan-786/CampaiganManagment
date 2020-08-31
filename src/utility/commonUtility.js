import moment from 'moment';
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
           "id":item.id,
           "date":date,
           "campaing":campaign,
           "pricing":pricing,
           "actions":actions
       }         
       reFormatedData.push(finalItemObj);
    })

    return reFormatedData;

}

export const customDate = {
    integerToDate: function(val) {
        return val ? new Date(val) : null;
    },
    dateToInteger: function(val){
        return val ? new Date(val).getTime():null; 
    },
    extractTimeFromDate: function(val) {
        return val ? moment(val).format('MMM D YYYY'):null; 
    },
    compareDates: function(d1 ,d2) {
        const dateParams1 = this.dateParams(d1);
        const dateParams2 = this.dateParams(d2);
        return (dateParams1['d'] == dateParams2['d'] && dateParams1['m'] == dateParams2['m'] &&
               dateParams1['Y'] == dateParams2['Y']) ? 1 : this.compareDatesUsingInterger(d1,d2);
               
    },
    dateParams: function(date) {
        return date ? {'d': moment(date).format('D'),
                       'm': moment(date).format('MMM'),
                       'Y': moment(date).format('YYYY')
                    } : {};
    },
    dateDifferenceInTermsOfDays : function(startDate ,endDate) {
        return (startDate && endDate) ? moment.duration(moment(endDate).diff(moment(startDate))).asDays() : null; 
    },

    compareDatesUsingInterger : function(d1,d2){
         const dt1 = this.dateToInteger(d1);
         const dt2 = this.dateToInteger(d2);
         return(dt1>dt2) ? 2 : 0;   
    }

}

export function getCurrentDate(){
    return moment().format("MMM D YYYY");
}


export const updateList=(data , id)=>{
    if(!data || !id) return null;
    let newList= [];
    data.map((itemVal)=>{
        if(itemVal.id !=id){
            newList.push(itemVal);
        }
    })

    return newList;
}

export const needToUpdateList=(currentDate , itemDate , newUserSelectedDate)=>{
    if(!currentDate || !itemDate || !newUserSelectedDate) return null;

    const v1 = customDate.compareDates(currentDate , newUserSelectedDate);
    const v2 = customDate.compareDates(newUserSelectedDate,itemDate);

    return v1 == v2 ? false : true;
}


