"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import BlogDetail from "@/pages/Blog/Detail/index";

const BlogListPage: React.FC = () => {
  return (
    <>
      <Header />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default BlogListPage;
