import Card from "../Card/Card";
import FeatureCard from "../Card/FeatureCard";

const TopArticles: any = ({latestBlogs}:any) => {
    console.log("latestBlogs new",{latestBlogs});
  
    // need to filter the latest blogs inder category 
    const latestBlogsData = latestBlogs?.filter((blog:any) => blog.customCategory[0].value === "latest-blog");
    console.log("latestBlogsData",{latestBlogsData});
  
   
    
    return (
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 md:p-6 p-0 py-6">
        <div className="lg:w-3/5">
          <FeatureCard
            title={latestBlogsData[0]?.title}
            des={latestBlogsData[0]?.content}
            imageUrl="mainImage.png"
            category="Success Story"
            href="/blogs/123"
          />
        </div>
        <div className="w-full lg:w-2/5 space-y-4 flex flex-col justify-center">
          <Card
            title="The Quick guide to virtual house flipping"
            date="8 Feb, 2024"
            imageUrl="cardImage1.png"
            category="Success Story"
            href="/blogs/123"
          />
          <Card
            title="The Quick guide to virtual house flipping"
            date="8 Feb, 2024"
            imageUrl="cardImage2.png"
            category="Success Story"
            href="/blogs/123"
          />
          <Card
            title="The Quick guide to virtual house flipping"
            date="8 Feb, 2024"
            imageUrl="cardImage3.png"
            category="Success Story"
            href="/blogs/123"
          />
        </div>
      </div>
    );
  };

  export default TopArticles;