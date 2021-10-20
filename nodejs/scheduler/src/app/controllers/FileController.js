import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path
    });

    res.status(200).json(file);
  }
}

export default new FileController();
