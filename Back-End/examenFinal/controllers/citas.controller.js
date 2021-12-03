const Cita = require('../models/Citas');

async function mostrarTodas(req, res) {

   try {
      let citas = await Cita.find();

      return res.send(citas);
   } catch (err) {
      console.log('Error al buscar')
   }
}

async function agregar(req, res) {

   const { title, date, time, inCharge, clientAddress, cost, sessionPerDay } = req.body;

   console.log('req: ', req.body)

   if (!title || !date || !time || !inCharge || !clientAddress || !cost || !sessionPerDay) return res.status(404).json({ "Success": false, "Message": "Missing Variabless" });

   try {

      let agregarCita = new Cita(req.body);
      await agregarCita.save();

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Cita guardada" });
      }

   } catch (err) {

   }
}

async function eliminar(req, res) {

   const { id } = req.params;

   if (!id) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      await Cita.findByIdAndRemove(id);

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Cita eliminada" });
      }

   } catch (err) {

   }
}

async function modificar(req, res) {

   const { id } = req.params;
   console.log(id)
   const { name, date, time, inCharge, clientAddress, cost, sessionPerDay } = req.body;

   if (!id || !name || !date || !time || !inCharge || !clientAddress || !cost || !sessionPerDay) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      await Cita.findByIdAndUpdate(id, req.body);

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Cita editada" });
      }

   } catch (err) {

   }
}

module.exports = {
   mostrarTodas,
   agregar,
   eliminar,
   modificar
}