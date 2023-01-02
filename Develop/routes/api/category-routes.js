const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const items = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one category by its `id` value
// be sure to include its associated Products

router.get("/:id", async (req, res) => {
  try {
    const items = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const items = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const items = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
