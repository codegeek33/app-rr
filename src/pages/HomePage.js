import React from 'react'
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad totam tempora ut modi placeat esse error natus. A porro ut voluptatem architecto provident ratione. Hic assumenda velit quidem quasi."
  },
  {
    id: 2,
    title: "Czym jest paradoks Fermiego",
    author: "Janusz Biznesu",
    text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad totam tempora ut modi placeat esse error natus. A porro ut voluptatem architecto provident ratione. Hic assumenda velit quidem quasi."
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "John Rambo",
    text: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad totam tempora ut modi placeat esse error natus. A porro ut voluptatem architecto provident ratione. Hic assumenda velit quidem quasi."
  },
]

const HomePage = () => {

  const artList = articles.map(article => (
    <Article key={article.id} {...article}/>
  ))

  return ( 
    <div className="home">
      {artList}
    </div>
   );
}
 
export default HomePage;