const router = require('express').Router();
const Product = require('../models/product.model');
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');

router.post('/', auth, upload.single('image'), async (req, res) => {
  const imageName = `product_${uuidv4()}`;
  if (req.file.buffer) {
    await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .pipe(
        require('fs').createWriteStream(
          `${__dirname}/../upload/${imageName}.png`
        )
      );
    req.body.image = `${imageName}.png`;
  }
  const product = new Product(req.body);

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .pipe(
        require('fs').createWriteStream(
          `${__dirname}/../upload/${imageName}.png`
        )
      );
    req.body.image = `${imageName}.png`;
  }

  try {
    await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
