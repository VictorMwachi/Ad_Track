const { timeStamp } = require("console");
const crypto = require("crypto");
const { URLSearchParams } = require("url");

class TrackingSytem {
    //Generate a unique tracking id
    static generateTrackingId(){
        return crypto.randomBytes(8).toString("hex")
    }
    //Create a tracking url
    static async createTrackingUrl({destinationUrl,campaignId,source,medium,customParams={}}){
        try{
            const trackingId = this.generateTrackingId();
            const baseUrl = process.env.TRACKING_DOMAIN || "victormwachi.github.io"

            //store the tracking details in db
            const trackingLink = await TrackingLink.create({
                trackingId,
                destinationUrl,
                campaignId,
                source,
                medium,
                customParams,
                createdAt:new Date()
            });
            //build URL with UTM parameters
            const utmParams = new URLSearchParams({
                utm_source:source,
                utm_medium:medium,
                utm_campaign:campaignId,
                tid:trackingId,
                ...customParams
            });
            return {
                trackingId,
                trackingUrl:`${baseUrl}/t/${trackingId}?${utmParams.toString()}`,
                originalUrl:destinationUrl
            }
        }
        catch(error){
            console.error("Error creating tracking url:",error);
            throw error;

        }

    }
    //handle click
    static async handleGclid(trackingId,gclid){
        try{
            if(!gclid) return null;
            await clickData.create({
                trackingId,
                gclid,
                timestamp: new Date()
            })
        }
        catch(error){
            console.error("Error handling GCLID:",error);
            throw error;

        }
    }
    //Track click and redirect
    static async handleClick(req, res) {
        try {
            const { tid } = req.query;
            const gclid = req.query.gclid;

            const trackingLink = await TrackingLink.findOne({
                where:{ trackingId:tid }
            });
            //check if tracking url exists in db
            if(!trackingLink){
                return res.status(404).json({
                    success:false,
                    message:"Tracking link not found!"                
                });
            }
            await ClickData.create({
                trackingId:tid,
                gclid,
                ipAddress:req.ip,
                userAgent:req.headers["user-agent"],
                referrer:req.headers.referer,
                timestamp: new Date()

            });

            // Build final redirect URL
            const finalUrl = new URL(trackingLink.destinationUrl);
                
            // Append GCLID if present
            if (gclid) {
                finalUrl.searchParams.append('gclid', gclid);
            }
            // Append original UTM parameters
            for (const [key, value] of Object.entries(req.query)) {
                if (key.startsWith('utm_')) {
                    finalUrl.searchParams.append(key, value);
                }
            }

            return res.redirect(finalUrl.toString());
    }
    catch(error){
        console.error('Error handling click:', error);
        return res.status(500).json({
                success: false,
                message: 'Error processing tracking link'
        });
    }

    }

}
//console.log(TrackingSytem.generateTrackingId())