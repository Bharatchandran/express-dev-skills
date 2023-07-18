const skills = [
    {id: 1,
    skill: 'JS',
    proficiency:'good' 
    },
    {id: 2,
    skill: 'HTML',
    proficiency:'ok' 
    },
    {id: 3,
    skill: 'CSS',
    proficiency:'fine' 
    },
    {id: 4,
    skill: 'Python',
    proficiency:'good' 
    },
    {id: 5,
    skill: 'Express',
    proficiency:'good' 
    },
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = Number(id);
    return skills.find(skill => skill.id === id)
}
