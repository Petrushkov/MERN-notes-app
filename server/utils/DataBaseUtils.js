import mongoose from 'mongoose';

import '../models/Note';

import config from '../../etc/config.json';

const Note = mongoose.model('Note');


export function setUpConnection(){
	mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes() {
	return Note.find();
}
export function createNote() {
	const note = new Note({
		title: data.title,
		text: data.text,
		color: data.color,
		createdAt: new Date()
	})
	note.save();
}
export function deleteNote() {
	return Note.findById(id).remove();
}