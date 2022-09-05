import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from '../../components/date';

export default function Post({ newObj }) {
    return (
        <Layout>

            <Head>
                <title>{newObj.data.title}</title>
            </Head>

            <h1 className="text-2xl"> {newObj.data.title}</h1>
            <br />
            {newObj.id}
            <br />
            <Date dateString={newObj.data.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: newObj.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    console.log(postData);
    const { id, content, data, contentHtml } = postData;
    const newObj = { id, content, data, contentHtml };
    return {
        props: {
            newObj,
        },
    };
}


