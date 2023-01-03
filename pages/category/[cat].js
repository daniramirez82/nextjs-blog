import { useRouter } from "next/router";
import CategoryArea from "../../components/areas/CategoryArea";
import SectionTitle from "../../components/ui/SectionTitle";
import Layout from "../../components/layout";
import ButtonPrimary from "../../components/ui/ButtonPrimary";
import { useSelector } from "react-redux";
import { updateCategory } from "../../store/categoryStore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Cat = ({ data }) => {

    // take the category from the router query
    const router = useRouter();
    const { cat } = router.query;
    //take the category from thr store
    const category = useSelector(state => state.category.category);
    const dispach = useDispatch();

    useEffect(() => {
        if(category === "Home") {
            dispach(updateCategory(cat));
        }
    }, [])



    return (
        <Layout>
            <ButtonPrimary>Up</ButtonPrimary>
            <div className="mt-16">
                <SectionTitle category={cat === "Home" ? "Lasted" : cat} />
            </div>
            <CategoryArea news={data.results} />
        </Layout>
    )

}

//only run on the server for ssr
// This gets called on every request
export async function getServerSideProps(context) {

    let { cat } = context.query;

    if (cat === "Lasted") cat = "home";

    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${cat.toLowerCase()}.json?api-key=vmbJSwb7M61sA8N4FLoA7XGAELlH1eqF`);
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}

export default Cat;



