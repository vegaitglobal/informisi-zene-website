import { useState, useEffect } from "react";
import PublicationHero from "../components/PublicationHero/PublicationHero";
import {getPublicationByCategoryService} from "../services/publication.service";
import Publications from "../components/Publications/Publications";
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";
import Pagination from "../components/Pagination/Pagination";
import { getPublicationCategoriesService } from "../services/categories.service";
import Loader from "../components/Loader/Loader";
export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [listOfCategories, setlistOfCategories] = useState([])
  const [publications, setPublications] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCategorySelection = (id)=>
  {
    setcurrentPage(1);
    var categoryName=listOfCategories.find(category => category.id === id);
    setSelectedCategory(categoryName?.id);
  }

  const handlePaginationClick = () => {
    if (currentPage === totalPages) return;
    setcurrentPage(prev => prev + 1);
  };

  useEffect(() => {
    setLoading(true)
    getPublicationByCategoryService( selectedCategory, currentPage ).then(({data,meta})=>{
      settotalPages(meta.last_page);
      setPublications(prev => currentPage===1 ? [...data]:[...prev,...data]);
    }).finally(()=> {
      setLoading(false)
    })
  }, [selectedCategory,currentPage]);

  
  useEffect(() => {
    setLoading(true)
    getPublicationCategoriesService()
    .then(data => {
      setlistOfCategories([...data]);
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  if(loading) return <Loader/>;

  return (
    <div>
      <PublicationHero
        list={listOfCategories}
        onSelectChange={handleCategorySelection}
        selectedCategory={selectedCategory}
      />
      <Publications data={publications} />

      <HorizontalSpacer desktopSize={120} mobileSize={60} />
      {currentPage === totalPages || <Pagination onClick={handlePaginationClick} />}
      <HorizontalSpacer desktopSize={120} mobileSize={60} />
    </div>
  );
}
