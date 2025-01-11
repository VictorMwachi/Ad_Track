const crypto = require("crypto");

class TrackingSytem {
    //Generate a unique tracking id
    static generateTrackingId(){
        return crypto.randomBytes(8).toString("hex")
    }
    //Create a tracking url
    static async createTrackingUrl({destinationUrl,campaignId,source,medium,customParams={}}){
        const trackingId = this.generateTrackingId();
        const baseUrl = process.env.TRACKING_DOMAIN || "victormwachi.github.io"

        //store the tracking details in db
        const trackingLink = await Trackinglink.create({
            trackingId,
            destinationUrl,
            campaignId,
            source,
            medium,
            customParams,
            createdAt:new Date()
        })
        //build URL with UTM parameters
    }

}
//console.log(TrackingSytem.generateTrackingId())