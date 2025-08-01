import data from "../../data.json";

import { Months } from "../enums/Months";

/*
* blog post title
blog post description
blog post author
blog pst image
like/dislike button*/

interface PostProps {
    title: string;
    slug: string;
    publishedAt: string;
    description: string;
    content: string;
}



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
                {dataPost.map((post, index) => {
                    const dateFormatted: Date = new Date(post.publishedAt);
                    const month: number = dateFormatted.getMonth();
                    const day: number = dateFormatted.getDay();
                    const year: number = dateFormatted.getFullYear();

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
