import ArticleBlock from "@/Components/ArticleBlock";
import Grid from "@/Components/Grid";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import App from "@/Layouts/App";
import React from "react";

export default function Show({ category, ...props }) {
    const {data : articles, meta, links} = props.articles;
    return (
        <>
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>ini adalah halaman {category.name}</Header.Subtitle>
                <Header.Content>YAW YAW YAW</Header.Content>
            </Header>
            <div className="container relative w-11/12">
                <div className="absolute left-32 top-0">
                    {articles.length ? (
                        <>
                            <Grid>
                                {articles.map((article) => (
                                    <ArticleBlock
                                        key={article.slug}
                                        article={article}
                                    />
                                ))}
                            </Grid>
                            <Pagination {...{ meta, links }}/>
                        </>
                    ) : (
                        "Artikel Kosong"
                    )}
                </div>
            </div>
        </>
    );
}

Show.layout = (page) => <App children={page} />;
