import { 
  useState,
  useEffect
 } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { addPost, deletePost, getPosts } from './api/post';
import { getNormalizedPosts } from './utils/get-normalize-posts';
import { getData } from './utils/get-data';
import { TEXT_VALIDATHION_LIMIT,
         TITLE_VALIDATHION_LIMIT
 } from './utils/constans';

import Post from './component/Posts/Post';
import Form from './component/Form/Form';

function App() {

  const [postsIds, setpostsIds] = useState(null);
  const [postsById, setpostsById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState('');
  const [textarea, setTextarea] = useState('');
 
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
      setInput(event.target.value);
  }

  function hendleInputBody(event) {
       setTextarea(event.target.value);
  }

  function hendleAddPostBtnClick(event) {
    event.preventDefault()
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
      title: input,
      body: textarea,
    };
    setpostsById({
      ...postsById,
      [post.id]: post
    });

    setpostsIds([post.id, ...postsIds]);
    addPost(post);
    setInput('');
    setTextarea('');
  }

  function formValidata() {
    let error = 0;
    if (!input || !input && !textarea || !textarea ) {
      error++;
      alert('Заполни оба поля' );
    
    } else
    if (input.length > TITLE_VALIDATHION_LIMIT ) {
      error++;
      alert('Убавь количество символов в названии поста');
    }else
    if (textarea.length> TEXT_VALIDATHION_LIMIT ) {
      error++;
      alert('Убавь количество символов в тексте поста');
    }
    return error;
  } 

  function hendleDelitePost(id) {
    setpostsIds(postsIds.filter(postId => postId !== id));
    deletePost(id);
  }

  return (     
    <div className='blog'>
      <h1 className='h1'>Приложение блог</h1>
      <div className='blog__inner'>
        <div className='blog__form'>
          <h2 className='h2'>Новый пост</h2>
          <Form 
              isClass= {'form__wrapper'}
              isvalue= {input}
              onChange = {hendleInputTitle}
              isvalueTextarea = {textarea}
              onChangeBody = {hendleInputBody}
              onClick = {hendleAddPostBtnClick}
                          
              />
          
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
