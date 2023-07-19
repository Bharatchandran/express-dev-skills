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
    {id: 6,
    skill: 'test',
    proficiency:'good' 
    },
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = Number(id);
    return skills.find(skill => skill.id === id)
}

function create(skill){
 skill.id = Date.now() %1000000;
//  skill.proficiency = String(skill.proficiency)
 skills.push(skill)
}
function deleteOne(id){
    id = Number(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}