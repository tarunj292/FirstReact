import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <CreatePost />
        <PostList />
        <Footer />
      </div>
    </div>
  )
}

export default App
