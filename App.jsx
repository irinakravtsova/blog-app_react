import { 
  useState,
  useEffect
 } from 'react'
import './App.css'
import { addPost, deletePost, getPosts } from './api/post';
import { getNormalizedPosts } from './utils/get-normalize-posts';
import { getData } from './utils/get-data';
import Post from './component/Posts/Post';
import { v4 as uuidv4 } from 'uuid';
import InputErrorTitle from './component/InputErrorTitle/InputErrorTitle';
import InputErrorBody from './component/InputErrorBody/InputErrorBody';
import Button from './component/button/button';
import { TEXT_VALIDATHION_LIMIT,
         TITLE_VALIDATHION_LIMIT
 } from './utils/constans';


//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: "delectus aut autem",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"

//   }
// ];

function App() {
  const initialTitle = ('');
  const initialBody = ('');
  const [postsIds, setpostsIds] = useState(null);
  const [postsById, setpostsById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [postTitle, setpostTitle] = useState(initialTitle);
  const [postBody, setpostBody] = useState(initialBody);
 
  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getPosts()
      .then(posts => {
        const [ids, byIds] = getNormalizedPosts(posts)
        setIsLoading(false);
        setpostsIds(ids);
        setpostsById(byIds);      
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  function hendleInputTitle(event) {
      setpostTitle(event.target.value);
  }

  function hendleInputBody(event) {
       setpostBody(event.target.value);
  }

  function hendleAddPostBtnClick() {
    let error = formValidata()
    if (error !== 0) {
      return     
    }
    alert('Всё отлично! Нажми ОК и твой пост будет добавлен в ленту')
    const id = uuidv4();
    const dt = getData()  
    const post = {
      id,
      dt,
      title: postTitle,
      body: postBody,
    };
    setpostsById({
      ...postsById,
      [post.id]: post
    });

    setpostsIds([post.id, ...postsIds]);
    addPost(post);
    setpostTitle(initialTitle);
    setpostBody(initialBody);
  }

  function formValidata() {
    let error = 0;
    if (!postTitle || !postBody ) {
      error++;
      alert('Заполни оба поля' );
    } else
    if (postTitle.length > TITLE_VALIDATHION_LIMIT ) {
      error++;
      alert('Убавь количество символов в названии поста');
    }else
    if (postBody.length> TEXT_VALIDATHION_LIMIT ) {
      error++;
      alert('Убавь количество символов в тексте поста');
    }
    return error;
  } 

  function hendleDelitePost(id) {
    setpostsIds(postsIds.filter(postId => postId !== id));
    deletePost(id);
  }

  function isPostBtnDisabled() {
    return postTitle.length <1 
  }

  return (     
    <div className='blog'>
      <h1 className='h1'>Приложение блог</h1>
      <div className='blog__inner'>
        <div className='blog__form'>
          <h2 className='h2'>Новый пост</h2>
          <div className='form__wrapper'>
            <input
              type="text"
              name='title'
              className='post-title-input'
              placeholder='Добавь заголовок'
              value={postTitle} 
              onChange={(event) => hendleInputTitle(event)}/>

            <InputErrorTitle 
                len= {postTitle.length}
                text='Твой заголовок превышает 20 символов'/>
            
            <textarea name="body" id=""
              className='post-text-input'
              value={postBody}
              placeholder='Напиши пост'
              onChange={(event) => hendleInputBody(event)}></textarea>  

            <InputErrorBody 
                len= {postBody.length}
                text='Твой пост превышает 40 символов'/>

            <Button 
                text={'Опубликовать'}
                isClass={'post-btn'}
                isDisabled={isPostBtnDisabled()}
                onClick={hendleAddPostBtnClick} />
                       
          </div>
        </div>

        <div className='blog__posts'>
          <h2 className='h2'>Лента</h2>
          <div className='posts'>
            { isError && <p>Произошла ошибка</p> }

            { isLoading && <p>Тут пока пусто</p> }

            { postsIds && postsIds.map(id => (
              <Post 
                key={id}
                post={postsById[id]}
                onDelete={() => hendleDelitePost(id)}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
