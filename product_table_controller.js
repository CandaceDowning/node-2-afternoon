module.exports = {

    create: (req,res) => {
        const dbInstance=req.app.get('db')
        dbInstance.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url])
        .then(products=> res.status(200).send(products))
        .catch(err=> {
            res.status(500).json("Error")
        })
    },

    getOne: (req,res) => {
        const dbInstance=req.app.get('db')
        dbInstance.read_product(req.params.id)
        .then(products => res.status(200).send(products))
        .catch(err=>{
            res.status(500).json("Error")
        })
    },

    getAll: (req,res) => {
        const dbInstance=req.app.get('db')
        dbInstance.read_products()
        .then(products=> res.status(200).send(products))
        .catch(err=>{
            res.status(500).json("Error")
        })
    },
        
    update: (req,res) => {
        const dbInstance=req.app.get('db')
        dbInstance.update_product([req.params.id, req.query.desc])
        .then(products=> res.status(200).send(products))
        .catch(err=>{
            res.status(500).json("Error")
        })
    },

    deleteOne: (req,res) => {
        const dbInstance=req.app.get('db')
        dbInstance.delete_product(req.params.id)
        .then(products=> res.status(200).send(products))
        .catch(err=>{
            res.status(500).json("Error")
        })
    },
}