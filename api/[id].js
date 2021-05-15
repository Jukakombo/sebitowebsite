import Contact from "models/Contact";
import dbConnect from "utils/dbConnect";
// import dbConnect from "utils/dbConnect";
dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const contact = await Contact.findById({});
        if (!contact) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const contact = await Contact.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!contact) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedContact = await Contact.deleteOne({ _id: id });
        if (!deletedContact) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
