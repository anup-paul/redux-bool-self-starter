import React from 'react';
import Book from '../components/Book/Book';
// import books from '../fakeData/books.json'
import {useSelector} from 'react-redux'
import PageLayout from '../components/PageLayout/PageLayout';
const Discover = () => {
    const books = useSelector((state) => {
        //console.log(state.books.discoverList);
        return state.books.discoverList;
    })
    return (
        <PageLayout>
            {
                books?.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;