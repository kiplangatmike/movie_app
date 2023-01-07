import Button  from "../Button";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { API, fetcher} from "../../Config";
import Loading from "../Loading";




const BannerItem = ({ item, mediaType }) => {
    const isFavorite = useFavorite(item?.id);
    const {userInfo} = useAuth();
    const { poster_path, title, id } = item;
    const { data, error } = useSWR(API.getMovieDetail(id), fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <Loading></Loading>
    const { genre } = data;

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