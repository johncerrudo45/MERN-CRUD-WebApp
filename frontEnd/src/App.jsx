import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook"

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* NAVBAR */}
                <nav className="bg-blue-600 p-4 text-white">
                    <div className="flex space-x-4">
                        <Link to="/Books" className="hover:text-gray-300">
                            Books
                        </Link>
                        <Link to="/add" className="hover:text-gray-300">
                            Add
                        </Link>
                    </div>
                </nav>

                {/* ROUTES */}
                <div className="container mx-auto mt-8 mx-4">
                    <Routes>
                        <Route path="/" element={<Books />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/add" element={<AddBook />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
