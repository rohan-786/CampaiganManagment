export const apiCalls = {
    getUpcomingCampaignsData : function() {
        let url = `http://localhost:3333/get-upcoming-campaigns-info`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
            }
        })
    },

    getLiveCampaignsData : function() {
        let url = `http://localhost:3333/get-live-campaigns-info`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
                 
            }
        })
    },

    getPastCampaignsData : function() {
        let url = `http://localhost:3333/get-past-campaigns-info`;
        return fetch(url,{
            method :'GET',
            headers: {
                  'Content-Type': 'application/json',
                 
            }
        })
    },

} 


