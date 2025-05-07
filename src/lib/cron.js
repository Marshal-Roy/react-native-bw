import cron from "cron"
import https from "https"

const job=new cron.CronJob("*/14 * * * *",function(){
    https.get(process.env.API_URL,(res)=>{
        if(res.statusCode===200)console.log("GET req sent successfully")
        else console.log("GET failed",res.statusCode)
    })
    .on("error",(e)=>console.error("error while sending req",e))
})

export default job;