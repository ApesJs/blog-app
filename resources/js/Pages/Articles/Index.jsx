import ArticleBlock from "@/Components/ArticleBlock";
import Grid from "@/Components/Grid";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import App from "@/Layouts/App";
import React from "react";

export default function Index({ category, ...props }) {
    const {data : articles, meta, links} = props.articles;
    return (
        <>
            <Header>
                <Header.Title>Articles Page</Header.Title>
                <Header.Subtitle>baca lebih banyak artikel untek menambah wawasan</Header.Subtitle>
                <Header.Content>Let's Goo. . .</Header.Content>
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

Index.layout = (page) => <App children={page} />;
