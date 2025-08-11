import data from "../../data.json";
import type { PostProps } from "../types/Post";
import { Months } from "../enums/Months";
import { PublishDate } from "./PublishDate";

export default function Blog() {

    const dataPost: PostProps[] = data;

    return (
        <main className="blog">
            <div className="blog-top">
                <h1>My Articles</h1>
                <p>Below are all my recent blog posts.
                    Click on any title to read the full article.</p>
            </div>
            <div className="blog-list">
                {
                    dataPost.map((post, index) => {
                        const { month, day, year } = PublishDate(post.publishedAt);

                        return (
                            <div key={index}>
                                <h3>{post.title}</h3>
                                {/* <p>{post.slug}</p> */}
                                <p>
                                    {Months[month]} {day}, {year}
                                </p>
                                <p>{post.description}</p>
                                <p>Deniz A.</p>
                                <img className="post-image"
                                    src="src/assets/images/How-Many-Blogs-Should-You-Post-a-Wee.webp"
                                    alt="some images" />
                                {/*<p>{post.content}</p>*/}
                                <div className="like-buttons">
                                    <button>Like</button>
                                    <button>Dislike</button>
                                </div>
                            </div>)
                    }
                    )}
            </div>
            <div>
            </div>
        </main>
    )
}
