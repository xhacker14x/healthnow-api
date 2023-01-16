const express = require('express')
const connection = require('../config/connection')
const router = express.Router()

// CREATE
router.post('/create', (req, res) => {
	const data = req.body
	const query = "INSERT INTO users (firstname,lastname) values(?,?,?,?,?,?,?,?)"
	connection.query(query, [data.firstname, data.lastname, data.address, data.postcode, data.contact_phone_number, data.email, data.username, data.password], (err, results) => {
		if(!err){
			return res.status(200).json({message: "Use Added Successfully"})
		}
		else{
			return res.status(500).json(err)
		}
	})
})

// READ
router.get('/', (req, res) => {
	const query = "SELECT * FROM users"
	connection.query(query, (err, results) => {
		if(!err){
			return res.status(200).json(results)
		}
		else{
			return res.status(500).json(err)
		}
	})
})

// UPDATE
router.patch('/update/:id', (req, res) => {
	const id = req.params.id
	const data = req.body
	const query = "UPDATE USERS SET firstname=?, lastname=?, address=?, postcode=?, contact_phone_number=?, email=?, username=?, password=? WHERE id=?"
	connection.query(query,[data.firstname, data.lastname, data.address, data.postcode, data.contact_phone_number, data.email, data.username, data.password, id], (err, results) => {
		if(!err){
			if(results.affectedRows == 0){
				return res.status(404).json({message: "Users id does not found"})
			}
			return res.status(200).json({message: "users updated Successfully"})
		}
		else{
			return res.status(500).json(err)
		}
	})
})

// DELETE

/* delete single row */
router.delete('/delete/:id', (req, res) => {
	const id = req.params.id
	const query = "DELETE FROM users WHERE id=?"
	connection.query(query, [id], (err, results) => {
		if(!err){
			if(results.affectedRows == 0){
				return res.status(404).json({message: "Users id does not found"})
			}
			return res.status(200).json({message: "user deleted Successfully"})
		}
		else{
			return res.status(500).json(err)
		}
	})
})

/* delete multiple rows */
router.post('/delete/ids', (req, res) => {
	const ids = req.body.ids
	const query = "DELETE FROM users WHERE id IN (?)"
	connection.query(query, [ids], (err, results) => {
		if(!err){
			if(results.affectedRows == 0){
				return res.status(404).json({message: "Users id does not found"})
			}
			return res.status(200).json({message: "user deleted Successfully"})
		}
		else{
			return res.status(500).json(err)
		}
	})
})

module.exports = router