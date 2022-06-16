import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";
import Courses from "./paths/Courses";
import Search from "./paths/Search";
import List from "./paths/List";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
];
const items = [
  {
    id: "1",
    name: "carrot cake",
    description: "home made here",
    price: "2.50",
    category: "cake",
    available: "no",
  },
  {
    id: "2",
    name: "sandwiches",
    description: "with a variety of fillings",
    price: "2.50",
    category: "snack",
    available: "no",
  },
  {
    id: "3",
    name: "salad",
    description: "uses seasonal local produce",
    price: "3.50",
    category: "side",
    available: "yes",
  },
  {
    id: "4",
    name: "hot chocolate",
    description: "with fully fat or skimmed milk",
    price: "2.00",
    category: "drinks",
    available: "yes",
  },
  {
    id: "5",
    name: "chocolate cake",
    description: "with cream",
    price: "2.50",
    category: "cake",
    available: "yes",
  },
  {
    id: "6",
    name: "soup",
    description: "ask for soups available today",
    price: "2.00",
    category: "snack",
    available: "yes",
  },
  {
    id: "7",
    name: "pizza",
    description: "ham and pineapple or four cheese",
    price: "5.00",
    category: "main",
    available: "yes",
  },
  {
    id: "8",
    name: "baked potato",
    description: "with cheese, coleslaw, beans or tuna",
    price: "4.50",
    category: "main",
    available: "yes",
  },
  {
    id: "9",
    name: "apple pie",
    description: "with cream or custard",
    price: "3.50",
    category: "pudding",
    available: "yes",
  },
  {
    id: "10",
    name: "cheesecake",
    description: "with cream",
    price: "3.00",
    category: "pudding",
    available: "yes",
  },
  {
    id: "11",
    name: "fish and chips",
    description: "locally caught ",
    price: "6.50",
    category: "main",
    available: "yes",
  },
  {
    id: "12",
    name: "lasagne",
    description: "with chips or garlic bread",
    price: "6.50",
    category: "main",
    available: "yes",
  },
  {
    id: "13",
    name: "ice cream",
    description: "various flavours",
    price: "2.50",
    category: "pudding",
    available: "yes",
  },
  {
    id: "14",
    name: "coffee",
    description: "freshly ground",
    price: "1.50",
    category: "drinks",
    available: "yes",
  },
  {
    id: "15",
    name: "tea",
    description: "a range of varieties",
    price: "1",
    category: "drinks",
    available: "yes",
  },
  {
    id: "16",
    name: "pasta",
    description: "with a tomato and garlic sauce",
    price: "5.50",
    category: "main",
  },
  {
    id: "17",
    name: "chips",
    description: "with ketchup or mayonnaise",
    price: "3",
    category: "side",
    available: "yes",
  },
];

const Home = () => {
  return <h1>Home</h1>;
};

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
};

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.fullName}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>

      <Link to="/users">Back to Users</Link>
    </>
  );
};

const Items = ({ items }) => {
  return (
    <>
      <h2>Menu</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.name}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

const Item = () => {
  const { itemId } = useParams();
  const currentItem =items.filter((item) => {
      return item.name=== itemId}
  )
  const {name, description, price} = currentItem[0]
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>£{parseFloat(price).toFixed(2)}</p>
      <Link to="/items">Back to Items</Link>
    </>
  );
};

const NoPage = () => {
  return <h2>404</h2>;
};
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="courses">Courses</Link>
          </li>
          <li>
            {" "}
            <Link to="/users">Users</Link>
          </li>
          <li>
            {" "}
            <Link to="/items">Items</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
          <Route path="users" element={<Users users={users} />}>
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="items" element={<Items items={items} />}>
            <Route path=":itemId" element={<Item />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
