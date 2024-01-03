import { useState, useEffect } from "react";
import PublicationHero from "../components/PublicationHero/PublicationHero";
import {getPublicationByCategoryService} from "../services/publication.service";
import Publications from "../components/Publications/Publications";
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";
import Pagination from "../components/Pagination/Pagination";
import { getPublicationCategoriesService } from "../services/categories.service";
export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [listOfCategories, setlistOfCategories] = useState([])
  const [publications, setPublications] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);

  const handleCategorySelection = (id)=>
  {
    setcurrentPage(1);
    var categoryName=listOfCategories.find(category => category.id === id);
    setSelectedCategory(categoryName?.name);
  }

  const handlePaginationClick = () => {
    if (currentPage === totalPages) return;
    setcurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    getPublicationByCategoryService( selectedCategory, currentPage ).then(({data,meta})=>{
      settotalPages(meta.last_page);
      setPublications(prev => currentPage===1 ? [...data]:[...prev,...data]);
    });
  }, [selectedCategory,currentPage]);

  
  useEffect(() => {
    getPublicationCategoriesService()
    .then(data => {
      setlistOfCategories([...data]);
    });
  }, []);

  return (
    <div>
      <PublicationHero
        list={listOfCategories}
        onSelectChange={handleCategorySelection}
      />
      <Publications data={publications} />

      <HorizontalSpacer desktopSize={120} mobileSize={60} />
      {currentPage === totalPages || <Pagination onClick={handlePaginationClick} />}
      <HorizontalSpacer desktopSize={120} mobileSize={60} />
    </div>
  );
}
