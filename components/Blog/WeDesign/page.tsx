import Style from "./style.module.scss"
const WeDesign = ()=>{
    return(
        <>
<section className={Style.section}>
    <div className={Style.container}>
        <div className={Style.row}>
        <div className={Style.textblock}>
                <h2>Welcome to the Infranium Blog
A curated space where luxury living, design inspiration, and progress updates come together.</h2>
                <div className={Style.pere}>
    <p>At Vvie Villas, we believe a home is more than just a space — it’s a lifestyle rooted in elegance, nature, and thoughtful detail. Through this journal, we invite you to explore our world: from architectural vision and investment insights to handpicked destinations and the evolving journey of bringing each villa to life.</p>
    <p>Whether you're planning your next investment, dreaming of a custom-built escape, or following the progress of your future home, this is where you'll find the stories, updates, and inspirations that define the Vvie way of life.</p>
    <p>Stay inspired. Stay informed. Live Vvie.</p>
</div>

            </div>
        </div>
    </div>
</section>
        
        </>
    )
}
export default WeDesign;