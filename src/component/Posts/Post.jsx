import Button from "../button/button"


function Post({
  post,
  onDelete,

}) {
   return (
    
    <div  className="posts">
        <div className="post">
          <p className="post__date">{post.dt}</p>
          <h3 className="post__title">{post.title}</h3>
          <div className="post__text-wrapper">
            <p className="post__text">{post.body}</p>
          </div>
          <Button 
            isClass={'delete-btn'}
            onClick={onDelete}
            text={'Удалить пост'}
          />
        </div>
    </div>
   
  )
} 

export default Post
