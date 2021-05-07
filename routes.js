const serietv = require('./serietv');
const { findById } = require('./serietv');

module.exports = function(app){
    const SerieTV = require('./serietv');

    // GET
    findAllSeriesTV = function(req, res){
        SerieTV.find(function(err, serietv){
            if(!err) res.send(seriestv);
            else console.log('ERROR'+err);
        });
    };

    // GET
    findByID = function(req, res){
        SerieTV.findByID(req.param.id, function(err, serietv){
            if(!err) res.send(serietv);
            else console.log('ERROR'+err);
        });
    };

    // POST
    addSerieTV = function(req, res){
        console.log('POST');
        console.log(req.body);

        let serietv = new SerieTV({
            titulo: req.body.titulo,
            temporadas: req.body.temporadas,
            pais: req.body.pais,
            genero: req.body.genero
        });
        SerieTV.save(function(err){
            if(!err) console.log('serieTV Guardada!');
            else console.log('ERROR'+err);
        });

        res.send(serietv);
    };

    // PUT (Update)
    updateSerieTV = function(req, res){
        SerieTV.findById(req.params.id, function(err, serietv){
            
            titulo = req.body.titulo;
            temporadas = req.body.temporadas;
            pais = req.body.pais;
            genero = req.body.genero;
        });
        SerieTV.save(function(err){
            if(!err) console.log('serieTV Actualizada!');
            else console.log('ERROR'+err);
        });

    };

    // DELETE
    deleteSerieTV = function(req, res){
        SerieTV.findById(req.params.id, function(err, serietv){
            serietv.remove(function(err){
                if(!err) console.log('serieTV Borrada!');
                else console.log('ERROR'+err);
            });
        });
    };

    // API Routes
    app.get('/seriestv', findAllSeriesTV);
    app.get('/seriestv:id', findById);
    app.post('/seriestv', addSerieTV);
    app.post('/seriestv:id', updateSerieTV);
    app.delete('/seriestv:id', deleteSerieTV);

}