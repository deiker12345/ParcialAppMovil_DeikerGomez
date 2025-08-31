const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let users = [];

// Registrar usuario
app.post('/register', (req, res) => {
  const { name, lastName, email, password, country } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: 'Email ya registrado' });

  const hashedPassword = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  const newUser = {
    id: uuidv4(),
    name,
    lastName,
    email,
    password: hashedPassword,
    country
  };

  users.push(newUser);

  res.json({ message: 'Usuario registrado', user: newUser });
});

//Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  const user = users.find(u => u.email === email && u.password === hashedPassword);

  if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

  res.json({ message: 'Login exitoso', user });
});

//Obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
