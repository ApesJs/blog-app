import ArticleBlock from "@/Components/ArticleBlock";
import Grid from "@/Components/Grid";
import Header from "@/Components/Header";
import NavLink from "@/Components/NavLink";
import App from "@/Layouts/App";
import React from "react";

export default function Home({ articles }) {
    // console.log(articles);
    return (
        <>
            <Header>
                <Header.Title>Homepage</Header.Title>
                <Header.Subtitle>ini adalah halaman utama</Header.Subtitle>
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
                            <NavLink href={route('articles.index')} className="text-blue-600 block mt-10 mb-10">Show More Articles . . .</NavLink>
                        </>
                    ) : (
                        "Artikel Kosong"
                    )}
                </div>
            </div>
        </>
    );
}

Home.layout = (page) => <App children={page} />;
