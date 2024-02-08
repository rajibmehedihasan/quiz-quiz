import { useEffect, useState } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";

export interface VideoType {
    noq: string;
    title: string;
    youtubeID: string;
}

const useVideoList = (page: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState<VideoType[]>([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideo() {
            const db = getDatabase();
            const videoRef = ref(db, "videos");
            const videoQuery = query(videoRef, orderByKey(), startAt(`${page}`), limitToFirst(8));

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery);
                setLoading(false);

                console.log(snapshot.val());

                if (snapshot.exists()) {
                    setVideos((prevVideos: VideoType[]) => {
                        return [...prevVideos, ...(Object.values(snapshot.val()) as VideoType[])];
                    });
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }

        fetchVideo();
    }, [page]);

    return {
        loading,
        error,
        hasMore,
        videos,
    };
};

export default useVideoList;
