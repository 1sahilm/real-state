import Image from "next/image";
import Style from "./style.module.scss"
const BannerSection = ()=>{
    return(
        <>
        <section className={Style.section}>
<div className={Style.container}>
    <div className={Style.row}>
        <div className={Style.box}>
        <div className={Style.logo}>
          {/* <h2>Infranium</h2> */}
        </div>

        {/* <h2> Ideas. Innovation. Impact. <span>All in sync.</span></h2> */}
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
        </div>
        <a href="#contact">
        <strong>Subscribe</strong> & Stay Ahead
        </a>
    </div>
</div>
        </section>
        </>
    )
}
export default BannerSection;