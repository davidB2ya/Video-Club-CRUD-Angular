import {connect} from '../config/conexion'

export const getMovies = async (req, res) => {
    // const obj = {'name': 'David', 'last_name': 'Bedoya'}
    // res.json(obj)
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie')
    // console.log(rows)
    res.json(rows)
}

export const getMovie = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie WHERE mov_id = ?',[
        req.params.id
    ])
    if(rows.length > 0) res.json(rows[0])
    else res.status(404)
    
}

export const saveMovie = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query(
        "INSERT INTO movie(mov_id, mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) VALUES(?, ?, ?, ?, ?, ?, ?)",
        [
        req.body.mov_id,
        req.body.mov_title, 
        req.body.mov_year,
        req.body.mov_time,
        req.body.mov_lang, 
        req.body.mov_dt_rel,
        req.body.mov_rel_country,

    ])
    // console.log(results);
    res.json({
        id: results.insertId,
        ...req.body,
    })

}


export const updateMovie = async (req, res) => {
    const connection = await connect()
    const results = await connection.query("UPDATE movie SET ? WHERE mov_id = ?",[
        req.body,
        req.params.id
    ])
    // console.log(results)
    res.sendStatus(204);
}

export const deleteMovie = async (req, res) => {
    const connection = await connect();
    const results = await connection.query("DELETE from movie WHERE mov_id = ?" ,[
        req.params.id,
    ]);
    // console.log(results);
    res.sendStatus(204);
}   