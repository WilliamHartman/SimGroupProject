module.exports = {
    getShelf: (req, res) => {
        console.log('getShelf test');
        const db = req.app.get('db');
        const { params } = req;

        db.read_shelf([ params.id ])
        .then(shelf=> res.status(200).send(shelf))
        .catch(()=> res.status(500).send() )
    },
    getBin: (req, res) => {
        console.log('getBin test');
        const db = req.app.get('db');
        const { params } = req;

        db.read_bin([ params.id ])
            .then(bin=> res.status(200).send(bin))
            .catch(()=> res.status(500).send() )
    },
    delete: (req, res) => {
        console.log('delete');
        const db = req.app.get('db');
        const { params } = req;

        db.delete_bin_object([ params.id ])
            .then(()=> res.status(200).send())
            .catch(()=> res.status(500).send() )
    },
    update: (req, res) => {
        console.log('update');
        const db = req.app.get('db');
        const { params, query } = req;

        db.update_bin_object([ params.id, query.name, query.price ])
            .then(obj=> res.status(200).send(obj))
            .catch(()=> res.status(500).send() )
    },
    create: (req, res) => {
        console.log('create');
        const db = req.app.get('db');
        const { params, query } = req;

        db.create_bin_object([ params.id, query.name, query.price ])
            .then(()=> res.status(200).send())
            .catch(()=> res.status(500).send())
    }
}