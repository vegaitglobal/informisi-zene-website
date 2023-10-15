export default function OpportunitiesPage() {
    const [listOfCategories, setListOfCategories] = useState([]);

    useEffect(()=>{
        getCategoriesService()
            .then(setListOfCategories)
            .catch(error => console.error(error));
    },[])
    
    return <div>
        Prilike za zene
    </div>
}