import { useState, useEffect } from "react";
import PublicationHero from "../components/PublicationHero/PublicationHero";
import {
  getPublicationsService,
  getPublicationByCategoryService,
} from "../services/publication.service";
import Publications from "../components/Publications/Publications";
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";
export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [data, setData] = useState([]);

  const listOfPostCategories = [
    {
      id: 1,
      name: "KOJI JE MOJ DEO?",
    },
    {
      id: 2,
      name: "ANALIZA",
    },
    {
      id: 3,
      name: "ACT",
    },
  ];

  function onSelectChange(id) {
    if (id !== 0 && !id) return;

    setSelectedCategory(id);
  }

  function fetchPublication(id) {
    if (id === "0" || !id) {
      return getPublicationsService().then(setData);
    }

    getPublicationByCategoryService({ id }).then(setData);
  }

  useEffect(() => {
    fetchPublication(selectedCategory);
  }, [selectedCategory]);
  return (
    <div>
      <PublicationHero
        list={listOfPostCategories}
        onSelectChange={onSelectChange}
      />
      {data?.data?.length && <Publications data={data?.data} />}

      <HorizontalSpacer desktopSize={120} mobileSize={60} />
    </div>
  );
}
