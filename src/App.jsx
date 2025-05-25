import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./component/pro"; // ✅ Fixed: correct casing, no extra space

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/success"
            element={<ProtectedRoute element={<Success />} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
