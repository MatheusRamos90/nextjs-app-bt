import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavbarComponent from '../../components/NavbarComponent'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Posts() {
    const { data, error } = useSWR('/api/posts', fetcher)

    if (error) return <div><p className='alert alert-danger'>Failed to load API</p></div>
    if (!data) return <div><p className='alert alert-success'>Loading...</p></div>

    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Blog - Consuming API with Next.js</title>
            </Head>
            <NavbarComponent/>
            <Container className='mt-5'>
                <h3 className='text-center mb-5'>BLOG</h3>
                <Row>
                    {
                        data.map((post, index) => (
                            <Col sm="12" lg="3" className='mb-5' key={index}>
                                <Card>
                                    <Image src={'/'.concat(post.image)} alt={post.title} width="auto" height="auto" />
                                    <Card.Body>
                                        <Card.Title>{ post.title }</Card.Title>
                                        <Card.Text>
                                            { post.content }
                                        </Card.Text>
                                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                                            <a className='btn btn-primary'>See more</a>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}