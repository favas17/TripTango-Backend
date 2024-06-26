const packageModel = require("../../Models/agentModel.js/packageModel");

const packageGet = async (req, res) => {
    try {
        const packages = await packageModel.find();
        return res.status(200).json(packages);
    } catch (error) {
        return res.status(500).json({ message: 'Failed to fetch package details', error: error.message });
    }
};

const packagePost = async (req, res, next) => {
    try {
        const { packageName, location, price, details, duration, mapLocation, category } = req.body;
        const days = JSON.parse(req.body.days);
        const images = req.files.map(file => file.filename);

        const newPackage = new packageModel({
            packageName: packageName,
            location: location,
            price: price,
            details: details,
            duration: duration,
            days: days,
            images: images,
            mapLocation: mapLocation,
            category: category,
        });

        await newPackage.save();
        return res.status(201).json({ message: "Package saved successfully" });
    } catch (error) {
        next(error);
    }
};

const packageById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const package = await packageModel.findOne({_id : id})
        if (!package) {
            return res.status(404).json({ message: "Package not found" });
        }

        return res.status(200).json(package);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    packageGet,
    packagePost,
    packageById,
};
