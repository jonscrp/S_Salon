
const AboutUsStyle ={
    padding:"10px",
    margin:"10px",
    border:"10px",
    gap:"30px",

}

function AboutUs () {
    return (
        <div style={AboutUsStyle}>

        <div><iframe src="https://www.google.com/maps/embed?pb=!4v1710813671482!6m8!1m7!1smJlutT_VrXwWkoqStRuekw!2m2!1d40.74467506237137!2d-73.90965163539147!3f95.88623!4f0!5f0.7820865974627469" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <section>
            <h1> Contact Information</h1>
            <p>Email: random@NailSalon.com</p>
            <p>Phone number: 666-666-6666</p>

        </section>
        
        <section>
            <h1>Leave a message</h1>

        </section>
        
        </div>
  
    );
}

export default AboutUs;