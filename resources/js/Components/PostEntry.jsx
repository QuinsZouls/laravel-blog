import React from "react";

export default function PostEntry({ title = "", description = "" }) {
    return (
        <div className="post-entry border-2	">
            <div className="top-content">
                <h1>{title}</h1>
            </div>
            <div className="content">{description}</div>
        </div>
    );
}
