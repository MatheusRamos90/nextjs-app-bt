export default async function blogHandler(req, res) {
    const {
        query: {id},
        method,
    } = req

    const response = await fetch(`http://localhost:3004/posts/${id}`)
    const data = await response.json()

    switch (method) {
        case 'GET':
            res.status(200).json(data)
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}