"use client";
import { Fragment, useState } from "react";
import Comment from "@/app/comment";
import ReplyComment from "@/app/reply-comment";
import Modal from "@/app/modal";

export default function CommentsSection({ currentUser, comments }) {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <>
      <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} />
      <main>
        <div className="container max-w-2xl mx-auto mt-16">
          <div>
            {comments.map((comment) => (
              <Fragment key={comment.id}>
                <Comment
                  comment={comment}
                  currentUser={currentUser}
                  setModalStatus={setModalStatus}
                />
                {comment.replies ? (
                  <div className="ml-10 pl-10 border-l-[2px] border-[#e4dddd]">
                    {comment.replies.map((reply) => (
                      <Fragment key={reply.id}>
                        <Comment
                          comment={reply}
                          currentUser={currentUser}
                          setModalStatus={setModalStatus}
                        />
                      </Fragment>
                    ))}
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
          <ReplyComment currentUser={currentUser} />
        </div>
      </main>
      <footer>
        <div className="mt-4 text-[11px] text-center">
          Challenge by
          <a
            className="text-[#3e52a3] ml-1"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            className="text-[#3e52a3] ml-1"
            href="https://github.com/nicefellow1234"
          >
            Umair Shah
          </a>
          .
        </div>
      </footer>
    </>
  );
}
