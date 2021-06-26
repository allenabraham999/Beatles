import MusicContent  from "./MusicContent";
import MusicCard from "./MusicCard";

function MusicCardCreator(x){
    return(
            <MusicCard photo = {x.photo[Object.keys(x.photo)[0]]} name={x.name} about = {x.about}/>
    );
}

function Music(){
    return(<div class="moosic-container">
        {MusicContent.map(MusicCardCreator)}
    </div>);
}

export default Music;