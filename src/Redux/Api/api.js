export const apiCalls = {
    getUpcomingCampaignsData : function() {
        let url = `http://ec2-34-227-142-138.compute-1.amazonaws.com/api/get-upcoming-campaigns-info`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
            }
        })
    },

    getLiveCampaignsData : function() {
        let url = `http://ec2-34-227-142-138.compute-1.amazonaws.com/api/get-live-campaigns-info`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
                 
            }
        })
    },

    getPastCampaignsData : function() {
        let url = `http://ec2-34-227-142-138.compute-1.amazonaws.com/api/get-past-campaigns-info`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
                 
            }
        })
    },

    updateCampaignsList : function(id,selectedDate){
        console.log("selected",selectedDate);
        let url = `http://ec2-34-227-142-138.compute-1.amazonaws.com/api/update-list`;
        return fetch(url,{
            method : 'POST',
            headers:{
                'Content-Type': 'application/json',
                'dateval':selectedDate,
                'id': id,
                
            }
        })
    }

} 


