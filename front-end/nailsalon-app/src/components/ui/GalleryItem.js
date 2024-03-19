function GalleryItem(props){
    return (<div>
        <img src={props.img} style={{width:"20%", height:"20%"}}></img>
        <p>Design name</p>
        <p>Credit: Staff name</p>
    </div>
    )
}


export default GalleryItem;