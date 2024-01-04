import { useEffect, useState } from "react";
import OpportunitiesHero from "../components/OpportunitiesHero/OpportunitiesHero";
import {getOpportunityByCategoryId} from "../services/posts.service";
import Pagination from "../components/Pagination/Pagination";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";
import { getCategoriesService } from "../services/categories.service";
export default function OpportunitiesPage() {
  const [opportunities, setopportunities] = useState([]);
  const [listOfCategories, setlistOfCategories] = useState([])
  const [currentPage, setcurrentPage] = useState(1);
  const [selectedCategory, setselectedCategory] = useState(0);
  const [totalPages, settotalPages] = useState(1);
  
  const handleCategorySelection = (id)=>
  {
    setcurrentPage(1);
    setselectedCategory(id);
  }
  const handlePaginationClick = () => {
    if (currentPage === totalPages) return;
    setcurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    getCategoriesService().then((data)=>{
      setlistOfCategories([...data]);
    });
  }, [])
  
  useEffect(() => {    
    getOpportunityByCategoryId(selectedCategory,currentPage).then(({data,meta}) => {
    settotalPages(meta?.last_page);
    setopportunities(prev => currentPage===1 ? [...data]:[...prev,...data]);
  });
  }, [currentPage,selectedCategory]);

  return (
    <div>
      <OpportunitiesHero
        list={listOfCategories}
        onSelectChange={handleCategorySelection}
      />
      <PostsContainer displayVersion="v2" data={opportunities} />{" "}
      <HorizontalSpacer desktopSize={120} mobileSize={60} />
      {currentPage === totalPages || <Pagination onClick={handlePaginationClick} />}
      <HorizontalSpacer desktopSize={120} mobileSize={60} />
    </div>
  );
}
