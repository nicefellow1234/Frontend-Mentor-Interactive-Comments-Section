"use client";
import { Fragment, useState } from "react";
import Comment from "@/app/comment";
import ReplyComment from "@/app/reply-comment";
import Modal from "@/app/modal";
import Notify from "@/app/notify";

export default function CommentsSection({ currentUser, comments }) {
  const [commentsData, setCommentsData] = useState(comments);
  const [modalStatus, setModalStatus] = useState(false);
  const [notifyStatus, setNotifyStatus] = useState({
    status: false,
    message: null,
  });
  const [deleteRecord, setDeleteRecord] = useState({});
  const [editRecord, setEditRecord] = useState({});
  const [replyRecord, setReplyRecord] = useState({});

  const handleNotifyStatus = (message) => {
    setNotifyStatus({
      status: true,
      message,
    });
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    delay(5000).then(() =>
      setNotifyStatus({
        status: false,
        message: null,
      })
    );
  };

  const handleVoting = (type, commentId) => {
    let updatedComments = commentsData.map((c) => {
      if (c.id === commentId) {
        // Adjust the comment's score based on the vote type
        if (type === "up") {
          c.score = (c.score || 0) + 1; // Upvote
        } else if (type === "down") {
          c.score = (c.score || 0) - 1; // Downvote
        }
      } else if (c.replies) {
        // Update the reply's score if it matches the commentId
        c.replies = c.replies.map((reply) => {
          if (reply.id === commentId) {
            // Adjust the reply's score based on the vote type
            if (type === "up") {
              reply.score = (reply.score || 0) + 1; // Upvote
            } else if (type === "down") {
              reply.score = (reply.score || 0) - 1; // Downvote
            }
          }
          return reply;
        });
      }
      return c;
    });

    setCommentsData(updatedComments);
    let message = `The ${
      type === "up" ? "upvote" : "downvote"
    } has been successfully applied!`;
    handleNotifyStatus(message);
  };

  const handleDeleteRecord = () => {
    let updatedComments = commentsData.filter((c) => {
      if (c.id === deleteRecord.id) {
        return false; // exclude the comment
      }
      if (c.replies) {
        // Remove the reply if it matches the deleteRecord.id
        c.replies = c.replies.filter((reply) => reply.id !== deleteRecord.id);
      }
      return true; // include other comments
    });
    setCommentsData(updatedComments);
    let message = "The comment has been successfully deleted!";
    handleNotifyStatus(message);
  };

  return (
    <>
      <Notify notifyStatus={notifyStatus} />
      <Modal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        handleDeleteRecord={handleDeleteRecord}
        setDeleteRecord={setDeleteRecord}
      />
      <main>
        <div className="container max-w-2xl mx-auto mt-16">
          <div className="px-3 md:px-0">
            {commentsData.map((comment) => (
              <Fragment key={comment.id}>
                <Comment
                  comment={comment}
                  currentUser={currentUser}
                  setModalStatus={setModalStatus}
                  setDeleteRecord={setDeleteRecord}
                  handleVoting={handleVoting}
                  commentsData={commentsData}
                  setCommentsData={setCommentsData}
                  editRecord={editRecord}
                  setEditRecord={setEditRecord}
                  handleNotifyStatus={handleNotifyStatus}
                  replyRecord={replyRecord}
                  setReplyRecord={setReplyRecord}
                />
                {comment.replies ? (
                  <div className="md:ml-10 md:pl-10 pl-5 border-l-[2px] border-[#e4dddd]">
                    {comment.replies.map((reply) => (
                      <Fragment key={reply.id}>
                        <Comment
                          comment={reply}
                          currentUser={currentUser}
                          setModalStatus={setModalStatus}
                          setDeleteRecord={setDeleteRecord}
                          handleVoting={handleVoting}
                          commentsData={commentsData}
                          setCommentsData={setCommentsData}
                          editRecord={editRecord}
                          setEditRecord={setEditRecord}
                          handleNotifyStatus={handleNotifyStatus}
                          replyRecord={replyRecord}
                          setReplyRecord={setReplyRecord}
                        />
                      </Fragment>
                    ))}
                  </div>
                ) : null}
              </Fragment>
            ))}
            <ReplyComment
              currentUser={currentUser}
              commentsData={commentsData}
              setCommentsData={setCommentsData}
              handleNotifyStatus={handleNotifyStatus}
            />
          </div>
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
