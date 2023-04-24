interface CommentsPropsType {
  comment: [id: number, content: string];
}

const Comments: React.FC<CommentsPropsType> = ({ comment }) => {
  return (
    <div>
      {comment?.map((comment: any) => (
        <div
          key={comment.id}
          className="border rounded bg-white mt-0.5 p-1 text-sm"
        >
          <p>{comment?.attributes?.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
