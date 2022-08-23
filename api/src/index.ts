import express from 'express';

const api = express();
const PORT = 4000;

//api.use(express.json());

api.get("/testar", (req, res) => {
    res.end("hej");
});

if (process.env.NODE_ENV !== 'test') {
  api.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default api;