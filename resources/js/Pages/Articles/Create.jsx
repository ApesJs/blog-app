import Button from "@/Components/Button";
import Container from "@/Components/Container";
import Editor from "@/Components/Editor";
import Error from "@/Components/Error";
import Header from "@/Components/Header";
import Input from "@/Components/Input";
import InputFile from "@/Components/InputFile";
import InputLabel from "@/Components/InputLabel";
import MultipleSelect from "@/Components/MultipleSelect";
import Select from "@/Components/Select";
import Textarea from "@/Components/Textarea";
import App from "@/Layouts/App";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create({ tags, categories, errors }) {
    const { data, setData } = useForm({
        title: "",
        teaser: "",
        category_id: "",
        body: "",
        picture: "",
        tags: [],
    });
    const onChange = (e) => setData(e.target.name, e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('articles.store'), {
            ...data,
            category_id : data.category_id.id,
            tags : data.tags.map(t => t.id),
        });
    };
    return (
        <>
            <Header>
                <Header.Title>{data.title || "The Title. . ."}</Header.Title>
                <Header.Subtitle>
                    {data.teaser || "The Teaser. . ."}
                </Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <InputLabel value="Select picture" />
                        <InputFile
                            name="picture"
                            id="picture"
                            onChange={(e) =>
                                setData("picture", e.target.files[0])
                            }
                        />
                        {errors.picture ? <Error value={errors.picture} /> : null}
                    </div>
                    <div className="grid grid-cols-12 gap-6 mg-6">
                        <div className="col-span-4">
                            <div>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    value={data.category_id}
                                    data={categories}
                                    onChange={(e) => setData("category_id", e)}
                                />
                        {errors.category_id ? <Error value={errors.category_id} /> : null}

                            </div>
                        </div>
                        <div className="col-span-8">
                            <div>
                                <InputLabel>Tags</InputLabel>
                                <MultipleSelect
                                    selectedItem={data.tags}
                                    data={tags}
                                    onChange={(e) => setData("tags", e)}
                                />
                        {errors.tags ? <Error value={errors.tags} /> : null}
                                
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <InputLabel value="Title" />
                        <Input
                            name="title"
                            id="title"
                            onChange={onChange}
                            value={data.title}
                        />
                        {errors.title ? <Error value={errors.title} /> : null}

                    </div>
                    <div className="mb-6">
                        <InputLabel value="Teaser" />
                        <Textarea
                            name="teaser"
                            id="teaser"
                            onChange={onChange}
                            value={data.teaser}
                        />
                        {errors.teaser ? <Error value={errors.teaser} /> : null}

                    </div>
                    <div className="mb-6">
                        <Editor
                            name="body"
                            id="body"
                            onChange={onChange}
                            value={data.body}
                        />
                        {errors.body ? <Error value={errors.body} /> : null}

                    </div>
                    <Button>Create Article</Button>
                </form>
            </Container>
        </>
    );
}

Create.layout = (page) => <App children={page} />;
