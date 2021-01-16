import { useRouter } from 'next/router'
import useSwr from 'swr'
import Head from "next/head";
import NavbarComponent from "../../components/NavbarComponent";
import {Card, Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
    const router = useRouter()
    const { data, error } = useSwr(
        router.query.id ? `/api/posts/${router.query.id}` : null,
        fetcher
    )

    if (error) return <div>Failed to load user</div>
    if (!data) return <div>Loading...</div>

    return(
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{ data.title } - Consuming API with Next.js</title>
            </Head>
            <NavbarComponent/>
            <Container className='mt-5'>
                <Row className="justify-content-md-center">
                    <h3 className='text-center mb-5'>{ data.title }</h3>
                    <Col xs lg="10">
                        <p className='text-center'><
                            Image src={'/'.concat(data.image)} alt={data.title} width="auto" height="auto" />
                        </p>
                        <div className='justify-content-center mt-5'>
                            { data.content }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}