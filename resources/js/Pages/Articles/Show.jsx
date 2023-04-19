import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Markdown from "@/Components/Markdown";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Show({ article }) {
    // console.log(article);
    return (
        <>
            <Head title={article.title}></Head>
            <Header>
                <Header.Title>{article.title}</Header.Title>
                <Header.Subtitle>{article.teaser}</Header.Subtitle>
                <Header.Content>
                    <div className="flex items-center">
                        <div className="mr-2 gap-x-2">
                            <Link
                                className="mb-3 bg-gray-700 text-white px-2 py-1 text-xs font-medium rounded-md hover:bg-gray-600 transition duration-200 shadow border-t border-gray-600"
                                href={route('categories.show', article.category.slug)}
                            >
                                {article.category.name} 
                            </Link>
                            &nbsp;&nbsp;:
                        </div>
                        {article.tags.length ? (
                            <div className="gap-x-2">
                                {article.tags.map((tag) => (
                                    <Link
                                        className="mr-1 bg-gray-700 text-white px-2 py-1 text-xs font-medium rounded-md hover:bg-gray-600 transition duration-200 shadow border-t border-gray-600"
                                        key={tag.slug}
                                        href="#"
                                    >
                                        {tag.name}
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            "tidak ada tags"
                        )}
                    </div>
                </Header.Content>
            </Header>
            <Container className="ml-24 mt-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-11">
                        <Markdown>{article.body}</Markdown>
                    </div>
                    <div className="ml-20 col-span-1">asdasd</div>
                </div>
            </Container>
        </>
    );
}

Show.layout = (page) => <App children={page} />;
