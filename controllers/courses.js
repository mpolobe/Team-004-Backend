const mongoose = require("mongoose");
const Course = require("../models/courses");

exports.getCourses = (req, res, next) => {
    Course.find()
        .select("_id title description level subject language country createdBy updatedAt updatedAt url user")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                courses: docs.map(doc => {
                    return {
                        _id: docs._id,
                        title: doc.title,
                        description: docs.description,
                        level: docs.level,
                        subject: docs.subject,
                        language: docs.language,
                        country: docs.country,
                        createdBy: docs.createdBy,
                        updatedAt: docs.updatedAt,
                        thumbnailUrl: docs.thumbnailUrl,
                        url: docs.url,
                        user: docs.user,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/courses/"
                        }
                    };
                })
            };
            //   if (docs.length >= 0) {
            res.status(200).json(response);
            //   } else {
            //       res.status(404).json({
            //           message: 'No entries found'
            //       });
            //   }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.getCourse = (req, res, next) => {
    const id = req.params._id;
    Product.findById(id)
        .select("_id title description level subject language country createdBy updatedAt updatedAt url user")
        .exec()
        .then(doc => {
            //  console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    course: doc,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/courses/"
                    }
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};
exports.createCourse = (req, res, next) => {
    const course = new Course({
        _id: req._id,
        title: req.title,
        description: req.description,
        level: req.level,
        subject: req.subject,
        language: req.language,
        country: req.country,
        createdBy: req.createdBy,
        updatedAt: req.updatedAt,
        thumbnailUrl: req.file.path,
        url: req.file.path,
        user: req.user
    });
    course
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Course added successfully",
                createdProduct: {
                    _id: result.id,
                    title: result.title,
                    description: result.description,
                    level: result.level,
                    subject: result.subject,
                    language: result.language,
                    country: result.country,
                    createdBy: result.createdBy,
                    updatedAt: result.updatedAt,
                    thumbnailUrl: result.file.path,
                    url: result.file.path,
                    user: result.user,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/courses/" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
