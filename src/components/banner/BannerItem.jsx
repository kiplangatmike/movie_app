import Button  from "../Button";
import { useNavigate } from "react-router-dom";
import { useSWR } from "swr";
import { API, fetcher} from "../../Config";


const BannerItem = ({ item, mediaType }) => {
    return (
        <div>
            <div>
                <img src={API.getImageUrl(poster_path, "w500")} alt=""/>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <div>
                        {genre?.map((genre) => (
                            <div key={genre.id}>
                                {genre.name}
                            </div>
                        ))}
                    </div>
                    <div>
                        <Button>
                            Watch Now
                        </Button>
                        {isFavourite ? (
                            <div>
                                <Heart id={id} mediaType={mediaType}></Heart>
                            </div>
                        ): (
                            <Button>
                                Add to favorite
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerItem;