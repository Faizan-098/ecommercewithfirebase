import React, { useEffect, useState,  } from "react";
import Mycontext from "./Mycontext";
import {
  collection,
  Timestamp,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const Mystate = ({ children }) => {
  const navigate = useNavigate();

  // =========================
  // STATE MANAGEMENT
  // =========================
  const [auth, setAuth] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("Cart")) || []
  );
  const [subTotal, setSubTotal] = useState(0);
  const [orderedList, setOrderedList] = useState([]);

  // =========================
  // DATE FORMATTING (Pakistan Time)
  // =========================
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Karachi",
  });

  // =========================
  // AUTH MANAGEMENT
  // =========================
  useEffect(() => {
    const user = localStorage.getItem("auth");
    if (user) {
      setAuth(JSON.parse(user));
    }
  }, []);

  // =========================
  // PRODUCT MANAGEMENT
  // =========================
  const [product, setProduct] = useState({
    title: "",
    price: "",
    imgUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: formattedDate,
  });

  // Fetch all products
  const getProductDataFromFireStore = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(fireDB, "Products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductsData(data);
    } catch (err) {
      console.error(err.message);
      toast.error("Something went wrong while fetching products");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductDataFromFireStore();
  }, []);

  // Add new product
  const addProduct = async (e) => {
    e.preventDefault();
    const { title, price, imgUrl, category, description } = product;

    if (!title || !price || !imgUrl || !category || !description) {
      return toast.error("Please fill all fields");
    }

    setIsLoading(true);
    try {
      await addDoc(collection(fireDB, "Products"), product);
      toast.success("Product added successfully");
      await getProductDataFromFireStore();

      // Reset product form
      setProduct({
        title: "",
        price: "",
        imgUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: formattedDate,
      });

      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      console.error(error);
      toast.error("Error adding product");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete product
  const deleteProduct = async (item) => {
    setIsLoading(true);
    try {
      await deleteDoc(doc(fireDB, "Products", item.id));
      await getProductDataFromFireStore();
      toast.success("Product deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error deleting product");
    } finally {
      setIsLoading(false);
    }
  };

  // Edit and update product
  const editBtn = (item) => setProduct(item);

  const updateItem = async (item) => {
    const { title, price, imgUrl, category, description } = item;

    if (!title || !price || !imgUrl || !category || !description) {
      return toast.error("Please fill all fields");
    }

    setIsLoading(true);
    try {
      await updateDoc(doc(fireDB, "Products", item.id), item);
      await getProductDataFromFireStore();
      toast.success("Product updated successfully");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Error updating product");
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // CART MANAGEMENT
  // =========================
  const addToCart = (item) => {
    const existingItem = cartList.find((p) => p.id === item.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cartList.map((p) =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      updatedCart = [{ quantity: 1, ...item }, ...cartList];
    }

    setCartList(updatedCart);
    toast.success("Item added to cart");
  };

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartList));
  }, [cartList]);

  // Remove item from cart
  const deleteCartProduct = (item) => {
    const updated = cartList.filter((p) => p.id !== item.id);
    setCartList(updated);
    toast.error("Item removed from cart");
  };

  // Calculate subtotal
  useEffect(() => {
    const total = cartList.reduce(
      (acc, item) => acc + Number(item.quantity) * Number(item.price),
      0
    );
    setSubTotal(total);
  }, [cartList]);

  // =========================
  // ORDER MANAGEMENT
  // =========================
  const [orderInfo, setOrderInfo] = useState({
    username: "",
    phonenumber: "",
    address: "",
    date: formattedDate,
  });

  // Fetch user orders
  const getOrderedList = async () => {
    setIsLoading(true);
    try {
      const orderRef = collection(fireDB, "Order");
      const querySnapshot = await getDocs(orderRef);
      const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrderedList(orders);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
};

  useEffect(() => {
    getOrderedList();
  }, []);

  // Place a new order
  const order = async (e) => {
    e.preventDefault();
    const { username, phonenumber, address } = orderInfo;

    if (!username || !phonenumber || !address) {
      return toast.error("Please fill all fields");
    }
  
    setIsLoading(true);
    try {
      const newOrder = {
        ...orderInfo,
        items: cartList,
        payment: subTotal + 100,
        useremail: auth.user.email,
      };

      await addDoc(collection(fireDB, "Order"), newOrder);
      setOrderInfo({
        username: "",
        phonenumber: "",
        address: "",
        date: formattedDate,
      });
      toast.success("Order placed successfully");
      setCartList([]);
      localStorage.removeItem("Cart");
      navigate("/order")
      await getOrderedList();
    } catch (err) {
      console.error(err);
      toast.error("Error placing order");
    } finally {
      setIsLoading(false);
    }
  };


  // ====================
  // USER MANAGMENT
  // ===================
  const [users, setUsers] = useState([])
  const getAllUsers = async()=>{
    setIsLoading(true)
    try{
     const querySnapshot = await getDocs(collection(fireDB,"Users"))

     const users = querySnapshot.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
     })

      setUsers(users)
    }
    catch(err){
      console.log(err.message);
      
      toast.error("Something Went Wrong!")
    }finally{
      setIsLoading(false)
    }
  }
  useEffect(()=>{
   getAllUsers()
  },[])

  // ======================
  // FILTER LOGIC
  // =====================
  const [searchKey, setSearchKey] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  // =========================
  // CONTEXT PROVIDER
  // ========================
  return (
    <Mycontext.Provider
      value={{
        isLoading,
        setIsLoading,
        product,
        setProduct,
        addProduct,
        productsData,
        deleteProduct,
        editBtn,
        updateItem,
        addToCart,
        cartList,
        deleteCartProduct,
        subTotal,
        orderInfo,
        setOrderInfo,
        order,
        auth,
        orderedList,
        users,
        searchKey,
        setSearchKey,
        searchCategory,
        setSearchCategory,
        setAuth
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default Mystate;
