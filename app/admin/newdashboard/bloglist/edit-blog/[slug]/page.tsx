
import React from "react";

import SideBarLayout from "../../../ui/sidebarlayout/page";

import Blog from "@/app/models/blogModels";
import EditBlogForm from "@/components/blog/EditBlogForm";

const getSingleBlogBySlug = async (slug:string)=>{
  const data  = await Blog.findOne({slug})
  const json = JSON.stringify(data);
  const blog = JSON.parse(json);
  return blog;
}





const page = async ({params}:any) => {
  
  const slug = params.slug;
  const blog = await getSingleBlogBySlug(slug);
  

  return (
    <SideBarLayout>
      <div className="p-4">
        <div className="">
         <EditBlogForm data={blog} />
        </div>
      </div>
    </SideBarLayout>
  );
};

export default page;
