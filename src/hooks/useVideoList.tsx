import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

const useVideoList = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fatchVideo() {
            const db = getDatabase();
            const videoRef = ref(db, "videos");
            const videoQuery = query(videoRef, orderByKey());

            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery);
                // @ts-expect-error
                setVideos((prevVideos) => {
                    return [...prevVideos, ...Object.values(snapshot.val())];
                });
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }

        fatchVideo();
    }, []);

    return {
        loading,
        error,
        videos,
    };
};

export default useVideoList;
