"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import BlogList from "@/pages/Blog/List/index";

const BlogListPage: React.FC = () => {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
};

export default BlogListPage;
