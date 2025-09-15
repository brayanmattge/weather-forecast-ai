import express from 'express'
import cors from 'cors'
import searchRoutes from './routes/search.js'

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.use('/search', searchRoutes);

app.listen(port, () => {
    console.log(`Server is running port: ${port}`);
});