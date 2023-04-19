import { Link } from "@inertiajs/react";
import React from "react";

export default function ArticleBlock({ article }) {
    // console.log(article.picture);
    return (
        <div className="border shadow-sm rounded-lg ">
            {/* <div style={{ backgroundImage: `url(${article.picture})` }} /> */}
            {article.picture.length ? (
                <div>
                    {article.picture ? (
                        <img className="w-80 h-max"
                            src={`${window.location.origin}/storage/${article.picture}`}
                            alt=""
                        />
                    ) : (
                        "gambarnya kaga ada bang"
                    )}
                </div>
            ) : (
                "gambarnya ga ada"
            )}
            <div className="px-4 py-6">
                {article.tags.length ? (
                    <div className="text-xs font-medium tracking-tight space-x-1 mb-3">
                        {article.tags.map((tag) => (
                            <Link
                                key={tag.slug}
                                href="#"
                                className="text-black hover:bg-gray-200 bg-gray-100 transition duration-200 px-2 py-1 rounded-md"
                            >
                                {tag.name}
                            </Link>
                        ))}
                    </div>
                ) : null}
                <Link href={route("articles.show", article.slug)}>
                    <h1 className="text-gray-800 font-semibold tracking-tight">
                        {article.title}
                    </h1>

                    <p className="!hidden md:!block text-gray-500 mt-2 line-clamp-1 tracking-tighter">
                        {article.teaser}
                    </p>
                </Link>
                <small className="block mt-2 text-sm text-gray-500 md:mt-4">
                    {article.created_at} by {article.user.name}
                </small>
            </div>
        </div>
    );
}
