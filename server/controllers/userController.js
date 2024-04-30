const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h' 
    }
  );
};

exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, email, phone, password: hashedPassword });
  
    await newUser.save();
  
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  
    // Generate JWT token upon successful login
    const token = generateToken(user);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
