export const navigationTabs = [
    {
        id : 0,
        label : "Upcoming Campaigns",
        apiCall:"getUpcomingCampaignsData"
    },
    {
        id : 1,
        label : "Live Campaigns",
        apiCall:"getLiveCampaignsData"
     
    },
    {
        id : 2,
        label : "Past Campaigns",
        apiCall:"getPastCampaignsData"
    }
]

export const listTabs=[
    {
        label:"DATE"
    },
    {
        label:"CAMPAIGN"
    },
    {
        label:"VIEW"
    },
    {
        label:"ACTIONS"
    }
]

export const dummyPricingData = {
    imgClass : "item8",
    name : "PUBG MOBILE",
    location : "US",
    pricingHeading : "Pricing",
    pricing :[
        {'label':"1 Week - 1 Month",
         'value' : "$100.00"},
         {'label':"6 Months",
         'value' : "$500.00"},
         {'label':"1 Year",
         'value' : "$900.00"}
    ]

}
