
import GalleryContainer from '../components/ui/GalleryContainer';



const GalleryContainerStyle = {

    display:"grid",
    gridTemplateColumns:"auto auto auto",
    padding:"10px",
    margin:"10px",


}
function Gallery () {
    return (
    <div style={GalleryContainerStyle}>
        <GalleryContainer/>
    
    </div>
        )
}

export default Gallery;