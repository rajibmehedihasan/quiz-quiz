import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "./video";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";

interface iVideo {
    title: string;
    youtubeID: string;
    noq: number;
}

function Videos() {
    const [page, setPage] = useState(1);
    const { loading, error, hasMore, videos } = useVideoList(page);

    return (
        <>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => setPage(page + 8)}
                    hasMore={hasMore}
                    loader={hasMore && <p>Loading...</p>}
                >
                    <div className="mx-auto my-12 grid grid-cols-5 gap-5">
                        {videos.map((video: iVideo, index: number) =>
                            video.noq ? (
                                <Link to="/quiz" key={index}>
                                    <Video video={video} />
                                </Link>
                            ) : (
                                <Video video={video} key={index} />
                            )
                        )}
                    </div>
                </InfiniteScroll>
            )}
        </>
    );
}

export default Videos;
