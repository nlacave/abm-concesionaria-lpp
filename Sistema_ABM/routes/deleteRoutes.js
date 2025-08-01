const express = require('express');
const router = express.Router();
const connection = require('./db')


router.delete('/borrar-auto-0km/:autoId', (req, res) => {
  const autoId = req.params.autoId;

  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE autodisponible0km SET borrado = 1 WHERE codAD0KM = ?';
  console.log('Query:', query);
  connection.query(query, [autoId], (err, result) => {
    if (err) {
      console.error('Error al borrar el auto:', err);
      req.session.errorMessage = 'Error al borrar el auto.';
      res.status(500).send('Error al borrar el auto.');
    } else {
      console.log('Auto borrado exitosamente:', result);
      req.session.successMessage = 'Auto borrado exitosamente.';
      res.status(200).send('Auto borrado exitosamente.');
    }
  });
});


router.delete('/borrar-accesorio/:accesorioId', (req, res) => {
  const accesorioId = req.params.accesorioId;

  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE accesorio SET borrado = 1 WHERE codACC = ?';
  console.log('Query:', query);
  connection.query(query, [accesorioId], (err, result) => {
    if (err) {
      console.error('Error al marcar el accesorio como borrado:', err);
      req.session.errorMessage = 'Error al borrar el auto.';
      res.status(500).send('Error al borrar el accesorio.'); 
    } else {
      console.log('Accesorio borrado exitosamente:', result);
      req.session.successMessage = 'Accesorio borrado exitosamente.';
      res.status(200).send('Accesorio borrado exitosamente.');
    }
  });
});


router.delete('/borrar-reparacion/:reparacionId', (req, res) => {
  const reparacionId = req.params.reparacionId;

  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE reparaciondisponible SET borrado = 1 WHERE codRDISP = ?';
  console.log('Query:', query);
  connection.query(query, [reparacionId], (err, result) => {
    if (err) {
      console.error('Error al marcar la reparación como borrada:', err);
      req.session.errorMessage = 'Error al marcar la reparación como borrada.';
      res.status(500).send('Error al marcar la reparación como borrada.');
    } else {
      console.log('Auto marcado como borrado exitosamente:', result);
      req.session.successMessage = 'Reparación marcada como borrada exitosamente.';
      res.status(200).send('Reparación marcada como borrada exitosamente.'); 
    }
  });
});



router.delete('/borrar-usuario/:usuarioId', (req, res) => {
  const usuarioId = req.params.usuarioId;

  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE usuario SET borrado = 1 WHERE codUsuario = ?';
  console.log('Query:', query);
  connection.query(query, [usuarioId], (err, result) => {
    if (err) {
      console.error('Error al borrar el usuario.', err);
      req.session.errorMessage = 'Error al borrar el usuario.';
      res.status(500).send('Error borrar el usuario.');
    } else {
      console.log('Usuario borrado exitosamente:', result);
      req.session.successMessage = 'Usuario borrado exitosamente.';
      res.status(200).send('Usuario borrado exitosamente.');
    }
  });
});


router.delete('/borrar-auto-usado/:autoId', (req, res) => {
  const autoId = req.params.autoId;

  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE autousado SET borrado = 1 WHERE codAU = ?';
  console.log('Query:', query);
  connection.query(query, [autoId], (err, result) => {
    if (err) {
      console.error('Error al borrar el auto:', err);
      req.session.errorMessage = 'Error al borrar el auto.';
      res.status(500).send('Error al borrar el auto.');
    } else {
      console.log('Auto borrado exitosamente:', result);
      req.session.successMessage = 'Auto borrado exitosamente.';
      res.status(200).send('Auto borrado exitosamente.'); 
    }
  });
});


router.delete('/borrar-cliente/:clienteId', (req, res) => {
  const clienteId = req.params.clienteId;
  console.log(clienteId);
  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE cliente SET borrado = 1 WHERE codPer = ?';
  console.log('Query:', query);
  connection.query(query, [clienteId], (err, result) => {
    if (err) {
      console.error('Error al borrar el cliente:', err);
      req.session.errorMessage = 'Error al borrar el cliente.';
      res.status(500).send('Error al borrar el cliente.');
    } else {
      console.log('Cliente borrado exitosamente:', result);
      req.session.successMessage = 'Cliente borrado exitosamente.';
      res.status(200).send('Cliente borrado exitosamente.'); 
    }
  });
});


router.delete('/borrar-persona/:personaId', (req, res) => {
  const personaId = req.params.personaId;

  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE persona SET borrado = 1 WHERE codPer = ?';
  console.log('Query:', query);
  connection.query(query, [personaId], (err, result) => {
    if (err) {
      console.error('Error al marcar la persona como borrada:', err);
      req.session.errorMessage = 'Error al marcar la persona como borrada.';
      res.status(500).send('Error al marcar la persona como borrada.');
    } else {
      console.log('Persona borrada exitosamente:', result);
      req.session.successMessage = 'Persona borrada exitosamente.';
      res.status(200).send('Persona borrada exitosamente.');
    }
  });
});


router.delete('/borrar-propietario/:propietarioId', (req, res) => {
  const propietarioId = req.params.propietarioId;
  console.log(propietarioId);
  // Realizar la eliminación en la base de datos
  const query = 'UPDATE propietario SET borrado = 1 WHERE codPer = ?';
  console.log('Query:', query);
  connection.query(query, [propietarioId], (err, result) => {
    if (err) {
      console.error('Error al borrar el propietario:', err);
      res.status(500).send('Error al borrar el propietario.'); 
    } else {
      console.log('Propietario borrado exitosamente:', result);
      res.send('Propietario borrado exitosamente.');
    }
  });
});


router.delete('/borrar-moroso/:morosoId', (req, res) => {
  const morosoId = req.params.morosoId;
  console.log(morosoId);
  // Realizar la eliminación en la base de datos
  const query = 'UPDATE moroso SET borrado = 1 WHERE codCL = ?';
  console.log('Query:', query);
  connection.query(query, [morosoId], (err, result) => {
    if (err) {
      console.error('Error al borrar el propietario:', err);
      res.status(500).send('Error al borrar el propietario.');
    } else {
      console.log('Propietario borrado exitosamente:', result);
      res.send('Propietario borrado exitosamente.');
    }
  });
});


router.delete('/borrar-usuario/:usuarioId', (req, res) => {
  const usuarioId = req.params.usuarioId;

  // Realizar el borrado lógico en la base de datos
  const query = 'UPDATE usuario SET borrado = 1 WHERE codUsuario = ?';
  console.log('Query:', query);
  connection.query(query, [usuarioId], (err, result) => {
    if (err) {
      console.error('Error al marcar el usuario como borrado:', err);
      req.session.errorMessage = 'Error al borrar el usuario.';
      res.status(500).send('Error al borrar el usuario.');
    } else {
      console.log('Usuario marcado como borrado exitosamente:', result);
      req.session.successMessage = 'Usuario borrado exitosamente.';
      res.status(200).send('Usuario borrado exitosamente.');
    }
  });
});


module.exports = router;
