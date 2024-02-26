import { gql, useQuery } from "@apollo/client"
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import BlogPage from "./components/blog/BlogPage"
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Index";
import { Route, Routes } from "react-router-dom";
import AuthorPage from "./components/authors/AuthorPage";
import ScrollTop from "./components/shared/ScrollTop";


const QUERY = gql `
query {
  authors {name}
}`

function App() {
  const {loading, data, error} = useQuery(QUERY);
  // console.log(data);
  return (
    <>
    <Layout>
      <ScrollTop />
      <Routes>
        
        <Route path="/" element={<HomePage /> }></Route>
        <Route path="/blogs/:slug" element={<BlogPage /> }></Route>
        <Route path="/authors/:slug" element={<AuthorPage /> }></Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App
