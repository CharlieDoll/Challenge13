const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [
        {
          model: Tag,
          through: ProductTag,
        },
      ],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new tag

router.get("/:id", async (req, res) => {
  try {
    const updateTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
// update a tag's name by its `id` value

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const delTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(delTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete on tag by its `id` value

module.exports = router;
