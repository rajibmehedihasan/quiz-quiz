import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "./video";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";

function Videos() {
    const [page, setPage] = useState(1);
    const { loading, error, hasMore, videos } = useVideoList(page);

    return (
        <>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => {
                        setPage(page + 8);
                    }}
                    hasMore={hasMore}
                    loader={hasMore && <p>Loading...</p>}
                >
                    <div className="mx-auto my-12 grid grid-cols-5 gap-5">
                        {videos.map((video) =>
                            video.noq ? (
                                <Link to="/quiz" key={video.youtubeID}>
                                    <Video
                                        title={video.title}
                                        youtubeID={video.youtubeID}
                                        noq={video.noq}
                                    />
                                </Link>
                            ) : (
                                <Video
                                    title={video.title}
                                    youtubeID={video.youtubeID}
                                    noq={video.noq}
                                    key={video.youtubeID}
                                />
                            )
                        )}
                    </div>
                </InfiniteScroll>
            )}
        </>
    );
}

export default Videos;
