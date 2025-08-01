import data from "../../data.json";
// import type {PostProps} from "../types/Post.ts";

interface PostProps {
    title: string;
    slug: string;
    publishedAt: string;
    description: string;
    content: string;
}

export default function PostShort() {

    const dataPost: PostProps[] = data;

    return (
        <>
            <div className="short-post-frame">
                {dataPost.map((post, index) => {
                        return (
                            <div key={index}>
                                <h3>{post.title}</h3>
                                <p>{post.slug}</p>
                                <p>{post.publishedAt}</p>
                                <p>{post.description}</p>
                                <p>Deniz A.</p>
                                <img className="post-image"
                                    src="src/assets/images/How-Many-Blogs-Should-You-Post-a-Wee.webp"
                                     alt="some images"/>
                                {/*<p>{post.content}</p>*/}
                                <div className="like-buttons">
                                    <button>Like</button>
                                    <button>Dislike</button>
                                </div>
                            </div>)
                    }
                )}
            </div>
        </>
    )
}