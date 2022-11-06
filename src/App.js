// const queryClient = new QueryClient();
import { Route, Routes } from "react-router-dom";
import Account from "./Components/UserDashboard/Account";
import Order from "./Components/UserDashboard/Order";
import TrackOrder from "./Components/UserDashboard/TrackOrder";
import UserAddress from "./Components/UserDashboard/UserAddress";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import UserLayoutPage from "./LayoutPage/UserLayoutPage";
import ForgotPage from "./pages/ForgotPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductCategories from "./pages/ProductCategories";
import ProductDetails from "./pages/ProductDetails";
import ResetPassPage from "./pages/ResetPassPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<ProductCategories />} />
        <Route path="/prodetails" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPage" element={<ForgotPage />} />
        <Route path="/reset" element={<ResetPassPage />} />

        <Route path="/userpage" element={<UserLayoutPage />}>
          <Route index element={<UserDashboard />} />
          <Route path="orders" element={<Order />} />
          <Route path="trackorder" element={<TrackOrder />} />
          <Route path="address" element={<UserAddress />} />
          <Route path="account_details" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
