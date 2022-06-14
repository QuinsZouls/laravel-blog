import React from "react";
import { Head } from "@inertiajs/inertia-react";
import PostEntry from "@/Components/PostEntry";

/**
 * Componente para renderizar la vista del blog
 * @param {*} props
 * @returns
 */
export default function Blog(props) {
    return (
        <>
            <Head title="Blogs" />
            <div className="wrapper">
                <h3 className="title">Blog</h3>
                <div className="post-container">
                    {props?.posts.map((post) => (
                        <PostEntry
                            title={post.title}
                            description={post.description}
                            key={post.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
