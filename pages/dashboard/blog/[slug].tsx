import EditBlog from "../../../components/Dashboard/Blog/BlogEdit";
import Layout from "../../../components/Dashboard/Layout";
import { useRouter } from 'next/router'
import { useEffect } from "react";

export default function Create() {
    const router = useRouter()
    const { slug } = router.query

    return <Layout><EditBlog slug={slug} /></Layout>
}