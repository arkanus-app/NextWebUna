export default function handler(req, res) {
    if (req.method === 'GET') {
      // Lógica para lidar com o método GET
      res.status(200).json({ message: 'GET request received' });
    }
  }