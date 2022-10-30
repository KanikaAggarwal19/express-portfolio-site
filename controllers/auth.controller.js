const db = require("../models/db.init");
const config = require("../config/auth.config");
const User = db.users;
const Contact = db.contacts;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  // Save User to Database
  try {
    const user = await User.create({
	  name: req.body.name,
      username: req.body.username,
      emailAddress: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

	res.render("login", {
		page: 6,
		message: "User Successfully Created!! Please Login Now"
	})
  } catch (error) {
    res.render("register", { message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.render("login", { page: 6,
		message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.render("login", { message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

   
    req.session.token = token;

   const contactlist = await Contact.findAll()
.then(data => {
     res.render("secure/welcome", {
		page: 1,
		contactlist: data,
	});
    });
  } catch (error) {
    return res.render("login", { message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.redirect("/");
  } catch (err) {
    this.next(err);
  }
};

exports.listcontact = async (req, res) => {
  try {
	 const contactlist = await Contact.findAll()
.then(data => {
     res.render("secure/welcome", {
		page: 1,
		contactlist: data,
	});
    });
	
	
  } catch (err) {
    this.next(err);
  }
};

exports.addcontact = async (req, res) => {
  try {
	
	const user = await Contact.create({
		  contactName: req.body.name,
	      contactNumber: req.body.phone,
	      emailAddress: req.body.email,
	    });
	
     const contactlist = await Contact.findAll();
    return res.render("secure/welcome", {
		page: 1,
		contactlist: contactlist,
	});
	
	
	return res.render("secure/welcome", {
		page: 1,
		contactlist: contactlist,
	});
	
  } catch (err) {
    this.next(err);
  }
};

exports.updatecontact = async (req, res) => {
	  try {
	    const user = await Contact.update({
		  contactName: req.body.name,
	      contactNumber: req.body.username,
	      emailAddress: req.body.email,
	    });
	
		res.render("login", {
			page: 6,
			message: "User Successfully Created!! Please Login Now"
		});
		
		const contactlist = await Contact.findAll();
    return res.render("secure/welcome", {
		page: 1,
		contactlist: contactlist,
	});
	
	
	return res.render("secure/welcome", {
		page: 1,
		contactlist: contactlist,
	});
		
	  } catch (error) {
	    res.render("register", { message: error.message });
	  }
};


exports.deletecontact = async (req, res) => {
	  try {
	    const user = await Contact.delete({
		  contactName: req.body.name,
	      contactNumber: req.body.username,
	      emailAddress: req.body.email,
	    });
	
		res.render("login", {
			page: 6,
			message: "User Successfully Created!! Please Login Now"
		});
		
		const contactlist = await Contact.findAll();
    return res.render("secure/welcome", {
		page: 1,
		contactlist: contactlist,
	});
	
	
	return res.render("secure/welcome", {
		page: 1,
		contactlist: contactlist,
	});
		
	  } catch (error) {
	    res.render("register", { message: error.message });
	  }
};