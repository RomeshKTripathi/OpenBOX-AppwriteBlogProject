import React, { useEffect, useRef, useState } from "react";
import { Query } from "appwrite";
import { Comment, Input } from "./ComponentIndex";
import service from "../appwrite/AppwriteService";
import { useSelector } from "react-redux";

const CommentSystem = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [commentError, setCommentError] = useState("");
    const [newComment, setNewComment] = useState(0);
    const commentBoxRef = useRef();

    const [userData, setUserData] = useState(
        useSelector((state) => state.user.userData)
    );

    let commentErrorTimeoutRef;

    const handleComment = async (e) => {
        e.preventDefault();
        clearTimeout(commentErrorTimeoutRef);
        setCommentError("");
        const comment = commentBoxRef.current.value;
        if (!comment.trim()) {
            setCommentError("No empty message allowed..");
            commentErrorTimeoutRef = setTimeout(() => {
                setCommentError("");
            }, 1500);
            return;
        }
        await service
            .createComment({ postId, username: userData.name, comment })
            .then(() => {
                commentBoxRef.current.value = "";
                setNewComment((count) => count + 1);
            })
            .catch((error) => {
                commentBoxRef.current.value = comment;
                setCommentError(error.message);
            });
    };

    useEffect(() => {
        console.log(`Rendering : ${Date.now()}`);
        service
            .getComments([Query.equal("postid", parseInt(postId))])
            .then((res) => {
                setComments(res?.documents.reverse());
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [newComment, userData]);

    return (
        <form
            onSubmit={handleComment}
            className="w-full p-4 bg-teal-100 rounded-sm mt-6 border-t-8 border-teal-800 relative"
        >
            <p className="text-sm text-rose-500 italic">{commentError}</p>
            <div className=" flex w-full align-middle my-4">
                <Input
                    className="border-teal-500 w-[calc(100%-50px)] block -mt-2"
                    placeholder="Write a Comment..."
                    ref={commentBoxRef}
                />
                <button
                    className="block outline-none border -ml-[52px] border-teal-500 bg-teal-500 h-8.5 rounded-r-sm px-3  text-white z-10 cursor-pointer "
                    onClick={handleComment}
                >
                    Post
                </button>
            </div>
            <h3 className="font-semibold text-lg text-teal-800 block mb-5">
                Comments
            </h3>
            {comments && comments.length
                ? comments.map((comment) => (
                      <Comment key={comment.$id} data={comment} />
                  ))
                : "No Comment Found"}
        </form>
    );
};

export default CommentSystem;
