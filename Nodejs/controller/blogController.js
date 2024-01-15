// const { blogs } = require("../model");
// exports.createBlog = async (req, res) => {
//     let data = {
//         name: req.body.name,
//         desc: req.body.desc,

//     };
//     let createBlog = await blogs.create(data);

//     if (createBlog) {
//         res.status(200).json({
//             data: createBlog,
//             message: "Created Sucessfully"
//         })
//     }
//     console.log(createBlog)
// }
// // ////////////////////////////////////////////

// exports.getBlogs = async (req, res) => {
//     let result = await blogs.findAll();
//     res.status(200).send(result);
// };


// // ///////////////////////////////////////////////

// exports.getBlogsById = async (req, res) => {
//     let result = await blogs.findByPk(req.params, id);
//     res.status(200).send(result);
// };

// // /////////////////////////////////////////////////
// exports.deleteBlogsById = async (req, res) => {
//     let result = await blogs.findAll();
//     res.status(200).send(result);
// };



// ////////////////////////////////////////////////////

const { blogs } = require("../model");

exports.createBlog = async (req, res) => {
    let data = {
        name: req.body.name,
        desc: req.body.desc,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        age: req.body.age,
        email: req.body.email,
    };

    try {
        let createBlog = await blogs.create(data);

        if (createBlog) {
            res.status(200).json({
                data: createBlog,
                message: "Created Successfully"
            });
        } else {
            res.status(400).json({
                message: "Failed to create blog",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        let result = await blogs.findAll();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

exports.getBlogsById = async (req, res) => {
    try {
        let result = await blogs.findByPk(req.params.id);
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).json({
                message: "Blog not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

exports.deleteBlogsById = async (req, res) => {
    try {
        let result = await blogs.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (result) {
            res.status(200).json({
                message: "Blog deleted successfully",
            });
        } else {
            res.status(404).json({
                message: "Blog not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


exports.updateBlog = async (req, res) => {
   let result= await blogs.update({
    ...req.body},{
    where:{
        id: req.params.id,

    },
   });
   res.status(200).json({
    sucess:true,
    message: "Updated Sucessfully",
   });
};
