import { useState, useEffect } from "react";
import BookService from "../services/books.service";
 
function Books() {
    const [books, setBooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
 
    useEffect(() => {
        retrieveBooks();
    }, []);
 
    const retrieveBooks = () => {
        BookService.getAll()
            .then((response) => {
                setBooks(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
 
    return (
        <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th></th>
                    <th scope="col" className="px-6 py-3 text-xl font-bold">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-xl font-bold">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                {books &&
                books.map((book, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="text-center">{index+1}</td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{book.title}</th>
                        <td className="px-6 py-4"> {book.description} </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}
 
export default Books;