import Video from "./video";

function Videos() {
    return (
        <div className="grid mx-auto my-12 grid-cols-5 gap-5">
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}

export default Videos;

// width: 100%;
// display: grid;
// margin: 3rem auto;
// grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// justify-items: center;
// gap: 20px;
// row-gap: 20px;
