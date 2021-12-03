const Doctor = require('../models/Doctor');

async function agregar(req, res) {

   const { name, service, phone } = req.body;

   if (!name || !service || !phone) return res.status(404).json({ "Success": false, "Message": "Missing Variables" });

   try {

      let agregarDoctor = new Doctor(req.body);
      await agregarDoctor.save();

      if (res.statusCode != 200) {
         return res.json({ "Status": "Algo salió mal" });

      } else {
         return res.json({ "Success": true, "Message": "Servicio guardado" });
      }

   } catch (err) {

   }
}

module.exports = {
   agregar
}