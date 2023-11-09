import React from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Sermons from "../pages/Sermons";
import SermonsSingle from "../pages/SermonsSingle";
import Ministies from "../pages/Ministies";
import MinistriesSinge from "../pages/MinistriesSinge";
import Blog from "../pages/Blog";
import BlogSingle from "../pages/BlogSingle";
import Contact from "../pages/Contact";
import Donations from "../pages/Donations";
import Elements from "../pages/Elements";
import Events from "../pages/Events";
import EventsSingle from "../pages/EventsSingle";
import StaffsSingle from "../pages/StaffsSingle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootAbout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootMinistries = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootBlog = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootContact = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootElements = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootEvents = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootStaffsSingle = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootDonations = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const RootSermons = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/about" element={<RootAbout />}>
        <Route index element={<About />} />
      </Route>

      <Route path="/sermons" element={<RootSermons />}>
        <Route index element={<Sermons />} />
        <Route path="/sermons/sermons-single" element={<SermonsSingle />} />
      </Route>

      <Route path="/ministries" element={<RootMinistries />}>
        <Route index element={<Ministies />} />
        <Route path=":ministries/*" element={<MinistriesSinge />} />
      </Route>
      {/*  <Route path="/ministries" element={<RootMinistries />}>
        <Route index element={<Ministies />} />
        <Route path=":ministries/*" element={<MinistriesSinge />}>
          <Route index element={<MinistriesSinge />} />
        </Route>
      </Route> */}
      <Route path="/blog" element={<RootBlog />}>
        <Route index element={<Blog />} />
        <Route path="/blog/blog-single" element={<BlogSingle />} />
      </Route>
      <Route path="/contact" element={<RootContact />}>
        <Route index element={<Contact />} />
      </Route>
      <Route path="/donations" element={<RootDonations />}>
        <Route index element={<Donations />} />
      </Route>
      <Route path="/elements" element={<RootElements />}>
        <Route index element={<Elements />} />
      </Route>
      <Route path="/events" element={<RootEvents />}>
        <Route index element={<Events />} />
        <Route path="/events/events-single" element={<EventsSingle />} />
      </Route>
      <Route path="/staffs-single" element={<RootStaffsSingle />}>
        <Route index element={<StaffsSingle />} />
      </Route>
    </>
  )
);
