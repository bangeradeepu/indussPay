import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
const contact = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const getContact = await axios.get(
          "https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile"
        );
        setContactData(getContact.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContact();
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [adharNumber, setAdharNumber] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handelSubmitContact = async () => {
    try {
      const postContact = await axios.post(
        "https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile",
        {
          first_name: firstName,
          last_name: lastName,
          emailId: email,
          age: age,
          gender: gender,
          mobilenumber: mobileNumber,
          pan_no: panNumber,
          adhaar_no: adharNumber,
          status: true,
        }
      );
      setContactData([...contactData, postContact.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`
      );
      setContactData(contactData.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const [open, setOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({});

  const handleClickOpen = (contact) => {
    setEditedContact(contact);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${editedContact.id}`,
        editedContact
      );
      // Update contactData state after successful update
      const updatedData = contactData.map((contact) => {
        if (contact.id === editedContact.id) {
          return editedContact;
        }
        return contact;
      });
      setContactData(updatedData);
      handleClose();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleGenderChangeEdit = (event) => {
    setEditedContact({ ...editedContact, gender: event.target.value });
  };
  return (
    <div className="njxiuewf">
       <div className="flex space-between">
        <div className="mt-2 jacegiwq">
        <div className="fw-700 f26 mb-2">Contact</div>
            <TextField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            placeholder="First Name"
            fullWidth
            />
            <div className="mt-1"></div>
            <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            placeholder="Last Name"
            fullWidth
            />
            <div className="mt-1"></div>

            <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Email"
            type="email"
            fullWidth
            />
            <div className="mt-1"></div>

            <TextField
            value={age}
            onChange={(e) => setAge(e.target.value)}
            label="Age"
            placeholder="Age"
            type="number"
            fullWidth
            />
            <div className="mt-1"></div>

            <TextField
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            label="Mobile Number"
            placeholder="Mobile Number"
            type="number"
            fullWidth
            />
            <div className="mt-1"></div>
            <div className="light-grey f10">Gender</div>
            <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={handleGenderChange}
            >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <div className="mt-1"></div>

            <TextField
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
            label="PAN Number"
            placeholder="PAN Number"
            type="text"
            fullWidth
            />
            <div className="mt-1"></div>

            <TextField
            value={adharNumber}
            onChange={(e) => setAdharNumber(e.target.value)}
            label="Aadhaar Number"
            placeholder="Aadhaar Number"
            type="text"
            fullWidth
            />
            <div className="mt-1"></div>

            <button onClick={handelSubmitContact} className="hcyqac-btn">
            Add Contact
            </button>
        </div>
        <img src="./images/bannerImg.svg" alt="" className="cewho9w3e8y kkiiwhgxgqw" />
       </div>
      
       <div className="fw-700 f26  mt-3">Contact List</div>
      <table className="contact-table mt-1 f10">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>PAN No</th>
            <th>ADHAAR No</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.emailId}</td>
              <td>{contact.age}</td>
              <td>{contact.gender}</td>
              <td>{contact.mobilenumber}</td>
              <td>{contact.pan_no}</td>
              <td>{contact.adhaar_no}</td>
              <td
                className="red c-pointer fw-600"
                onClick={() => handleDelete(contact.id)}
              >
                DELETE
              </td>
              <td
                className="green c-pointer fw-600"
                onClick={() => handleClickOpen(contact)}
              >
                EDIT
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please edit the contact details.
          </DialogContentText>
          <form onSubmit={handleFormSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="first_name"
              name="first_name"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              value={editedContact.first_name || ""}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="last_name"
              name="last_name"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              value={editedContact.last_name || ""}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="emailId"
              name="emailId"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              value={editedContact.emailId || ""}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              variant="standard"
              value={editedContact.age || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="" className="f8">
              Gender
            </label>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={editedContact.gender || ""}
              onChange={handleGenderChangeEdit}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <TextField
              margin="dense"
              id="mobilenumber"
              name="mobilenumber"
              label="Mobile Number"
              type="text"
              fullWidth
              variant="standard"
              value={editedContact.mobilenumber || ""}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="pan_no"
              name="pan_no"
              label="PAN Number"
              type="text"
              fullWidth
              variant="standard"
              value={editedContact.pan_no || ""}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="adhaar_no"
              name="adhaar_no"
              label="Aadhaar Number"
              type="text"
              fullWidth
              variant="standard"
              value={editedContact.adhaar_no || ""}
              onChange={handleInputChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default contact;
