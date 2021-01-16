import Head from 'next/head'
import NavbarComponent from "../components/NavbarComponent";
import {Container} from "react-bootstrap";

export default function Home() {
  return (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Consuming API with Next.js</title>
        </Head>
        <NavbarComponent/>
        <Container className='mt-5'>
            <h2 className='text-center mb-2'>Next.js App using Bootstrap</h2>
        </Container>
    </div>
  )
}
