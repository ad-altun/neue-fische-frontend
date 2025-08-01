/*
* blog post title
blog post description
blog post author
blog pst image
like/dislike button*/

import PostShort from "./PostShort.tsx";

export default function Blog() {
    return (
        <>
            <div>
                <h1>My Articles</h1>
                <p>Below are all my recent blog posts.
                    Click on any title to read the full article.</p>
            </div>
            <div>
                <PostShort />
            </div>
        </>
    )
}
