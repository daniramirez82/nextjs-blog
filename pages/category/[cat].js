import { useRouter } from "next/router";
import CategoryArea from "../../components/areas/CategoryArea";
import SectionTitle from "../../components/ui/SectionTitle";
import Layout from "../../components/layout";

const Cat = ({ data }) => {

    // take the category from the router query
    const router = useRouter();
    const { cat } = router.query;



    return (
        <Layout>
            <SectionTitle category={cat} />
            <CategoryArea news={data.results} />
        </Layout>
    )

}

//only run on the server for ssr
// This gets called on every request
export async function getServerSideProps(context) {

    const { cat } = context.query;

    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${cat.toLowerCase()}.json?api-key=vmbJSwb7M61sA8N4FLoA7XGAELlH1eqF`);
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}

export default Cat;



