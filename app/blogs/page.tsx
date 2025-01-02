"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/blog/search";
import TopArticles from "@/components/blog/top-article";
import PopularArticles from "@/components/blog/popular-articles";
import RecentArticles from "@/components/blog/recent-articles";
import { connect } from "@/app/dbConfig";
import Blog from "../models/blogModels";


const getAllBlogs = async () => {
  try {
    connect();
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    return error;
  }
};

const BlogListPage = async ()=>{
  const response: any = await getAllBlogs();
  console.log("blogs res",{response});
  return (
    <>
      <Header />
      <div className="pt-[130px]">
        <h1 className="text-4xl md:text-[52px] font-bold text-center">
          Our Blogs
        </h1>
        <SearchBar />
        <TopArticles latestBlogs={response} />
        <PopularArticles />
        <RecentArticles />
      </div>
      <Footer />
    </>
  );
};

export default BlogListPage;
