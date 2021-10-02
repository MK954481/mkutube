import React from "react";
import moment from "moment";
import "./__comment.scss";
const Comment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;
  return (
    <div className="comment p-2 d-flex w-100 my-2">
      <img src={authorProfileImageUrl} alt="" className="rounded-circle mr-3" />
      <div className="comment__body">
        <p className="comment__header mb-1">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-1">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
