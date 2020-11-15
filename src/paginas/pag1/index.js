import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/post';
import Loading from '../components/loading/loading.js';
import { getPosts } from '../../store/posts/actions';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Footer from '../components/footer/footer';
import Search from '../components/search';






const renderPost = (props) =>
  <Post key={props.id} {...props} />

export default () => {
  const dispatch = useDispatch();

  

  const isError = useSelector(state => state.cards.isError);
  const isLoading = useSelector(state => state.cards.isLoading);
  const posts = useSelector(state => state.cards.cards);

  console.log(posts);



  useEffect(() => {
    if (posts.length) {
      return;
    }

    dispatch(getPosts());
  }, [dispatch]);

if (isError) {
    return (
      <h1>
        OH MY, AN ERROR
      </h1>
    )
  }

  return (
    <section>
      {!isLoading ? (
        <>
        <Container>
        
          <Search/>
        <Row className="mt-5">{posts.map(renderPost)}</Row>
        </Container>
        <Footer />
        </>
      ) : <Loading />}
    </section>

  )
  
}





