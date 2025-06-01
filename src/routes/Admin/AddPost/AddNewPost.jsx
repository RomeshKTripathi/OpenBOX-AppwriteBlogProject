import RealTimeEditor from "../../../components/utility/RealTimeEditor";
import Input from "../../../components/utility/Input";
// import service from "../appwrite/AppwriteService";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddNewPost = ({ post }) => {
    const { handleSubmit, register, control, watch, setValue, getValues } =
        useForm({
            defaultValues: {
                title: post ? post.title : "",
                content: post ? post.content : "",
                slug: post ? post.$id : "",
                status: post ? post.status : "active",
            },
        });
    // const userData = useSelector((state) => state.user.userData);

    // const navigate = useNavigate();

    const submitArticle = async (article) => {
        console.log(article);

        // if (post) {
        //     const file = article.image[0]
        //         ? await service.uploadFile(article.image[0])
        //         : null;
        //     // Delete Privious featured image
        //     if (file) {
        //         console.log(post.featuredimage);
        //         if (post.featuredimage)
        //             await service.deleteFile(post.featuredimage);
        //     }
        //     // Update post.
        //     const dbPost = await service.updatePost(post.$id, {
        //         ...article,
        //         image: file ? file.$id : post.featuredimage,
        //     });
        //     if (dbPost) {
        //         navigate("/");
        //     }
        // } else {
        //     const file = article.image[0]
        //         ? await service.uploadFile(article.image[0])
        //         : null;
        //     const dbPost = service.createPost({
        //         ...article,
        //         userId: userData.$id,
        //         image: file ? file.$id : undefined,
        //         slug: String(Date.now()),
        //     });
        //     if (dbPost) {
        //         navigate("/");
        //     }
        // }
    };

    // const slugTransform = useCallback((value) => {
    //     if (value && typeof value === "string") {
    //         return value.trim().toLowerCase().replaceAll(" ", "-");
    //     }
    //     return "";
    // }, []);

    // useEffect(() => {
    //     const subscription = watch((value, { name }) => {
    //         if (name === "title") {
    //             setValue(
    //                 "slug",
    //                 slugTransform(value.title, { shouldValidate: true })
    //             );
    //         }
    //     });

    //     return () => {
    //         subscription.unsubscribe();
    //     };
    // }, [watch, slugTransform, setValue]);

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit(submitArticle)}
                className="w-full p-12 mx-auto max-sm:p-2 "
            >
                <div className="">
                    <Input
                        style={"text-xl bg-transparent border "}
                        type="text"
                        name="title"
                        placeholder="Enter Your Post Title"
                        register={register}
                        validationObject={{ required: true }}
                    />
                    <Input
                        style={""}
                        readOnly={true}
                        register={register}
                        onInput={(e) => {
                            setValue(
                                "slug",
                                slugTransform(e.currentTarget.value),
                                {
                                    shouldValidate: true,
                                }
                            );
                        }}
                        validationObject={{ required: true }}
                        placeholder="Slug of the post"
                        type="text"
                        name="slug"
                    />
                    <RealTimeEditor
                        name="content"
                        control={control}
                        defaultValue={getValues("content")}
                    />
                    <div className="m">
                        <Input
                            label="Featured Image"
                            style="bg-transparent"
                            type="file"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            placeholder="Select Featured Image"
                            register={register}
                            name="image"
                            validationObject={{ required: true }}
                        />
                        {/* <Input
                        type="submit"
                        className="cursor-pointer hover:bg-teal-100"
                    /> */}
                    </div>
                </div>
            </form>
            {/* {post && (
                <div className="w-96 ml-12 rounded-sm max-sm:w-full max-sm:m-2">
                    <p>Featured image is</p>
                    <img
                        className="rounded-sm "
                        src={service.getFilePreview(post.featuredimage)}
                        alt=""
                    />
                </div>
            )} */}
        </div>
    );
};

export default AddNewPost;
