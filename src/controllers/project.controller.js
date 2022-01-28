import Project from '../models/Project';

export async function createProject(req, res) {
  const { name, priority, description, deliverydate } = req.body;
  try {
    let newProject = await Project.create({
      name,
      priority,
      description,
      deliverydate
    }, {
      fields: ['name', 'priority', 'description', 'deliverydate']
    });

    if (newProject) {
      return res.status(201).json({
        message: 'Project created successfully',
        data: newProject
      });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Error creating project',
      data: {
      }
    });
  }
}

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();

    return res.status(200).json({
      message: 'Proyectos',
      data: projects
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Error en obtener proyectos',
      data: {
      }
    });
  }
}

export async function getProjectByID(req, res) {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id
      }
    });
    return res.status(200).json({
      message: 'Proyecto encontrado',
      data: project
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error al encontrar el proyecto',
      data: {}
    })
  }
}

export async function deleteProjectByID(req, res) {
  try {
    const { id } = req.params;
    const deleteProject = await Project.destroy({
      where: {
        id
      }
    });
    return res.status(204).json({
      message: 'Proyecto eliminado con exito',
      data: deleteProject
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error eliminando el proyecto',
      data: {}
    });
  }
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  const projects = await Project.findAll({
    attributes: ['id', 'name', 'priority', 'descripction', 'deliverydate'],
    where: {
      id
    }
  });

  if (projects.length > 0) {
    projects.forEach(async project => {
      await project.update({
        name,
        priority,
        description,
        deliverydate
      });
    })
  }

  return res.status(200).json({
    message: 'Proyecto actualizado',
    data: projects
  });
}