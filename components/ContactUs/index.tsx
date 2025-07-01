import styles from "../ContactUs/ContactUs.module.scss"
import InqueryBox from "../Inquerybox";


interface ContactUsProp {
   background?:any; 
   textColor?:any;
}




const ContactUs = ({background , textColor}:ContactUsProp)=>{
    console.log("background", background)
    return(
        <>
<section className={styles.section} id="contact"
style={{
    background:`${background}`
}}
>
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.contentbox}>
                <h2 
                style={{
                    color:`${textColor}`
                }}
                ><span 
                 style={{
                    color:`${textColor}`
                }}
                >Contact Us</span> – Let’s Make Something Great Together!</h2>
                <div className={styles.desp} 
                >
                    <h4
                    style={{
                    color:`${textColor}`
                }}
                    >Time to break the ice? We’d love to hear from you! </h4>
                    <p
                    style={{
                    color:`${textColor}`
                }}
                    >Whether you have a question, need expert advice, or are ready to transform your Salesforce experience, we’re here to help.</p>
                </div>
            </div>
            <div className={styles.frombox}>
                <InqueryBox />
            </div>
        </div>
    </div>
</section>


        </>
    )
}
export default ContactUs;