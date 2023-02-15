import { useEffect, useState } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";

const useVideoList = (page: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fatchVideo() {
            const db = getDatabase();
            const videoRef = ref(db, "videos");
            const videoQuery = query(videoRef, orderByKey(), startAt(`${page}`), limitToFirst(8));

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    // @ts-expect-error
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())];
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

        fatchVideo();
    }, [page]);

    return {
        loading,
        error,
        hasMore,
        videos,
    };
};

export default useVideoList;
