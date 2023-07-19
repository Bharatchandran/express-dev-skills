const Skills = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll(),
        title: "My Skills"
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        title: "My Skill"
    })
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: "New Skill"
    })
}

function create(req, res) {
    Skills.create(req.body);
    res.redirect('/skills')
}

function deleteSkill(req,res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills')
}