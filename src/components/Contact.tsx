import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === '';
    const isEmailEmpty = email.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (isNameEmpty || isEmailEmpty || isMessageEmpty) return;

    try {
      await emailjs.send(
        'MonicaPortfolioService',
        'contact_form_template',
        { name, email, message },
        'R9p1mlJeTKphX0S8Y'
      );

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Email failed:', error);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Have a project idea or want to collaborate? Reach out — I’ll get back to you!</p>

          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                fullWidth
                required
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputProps={{ style: { color: '#000' } }}
              />
              <TextField
                fullWidth
                required
                label="Email / Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone" : ""}
                InputProps={{ style: { color: '#000' } }}
              />
            </div>

            <TextField
              fullWidth
              required
              label="Message"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              InputProps={{ style: { color: '#000' } }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ marginTop: 2 }}
            >
              Send
            </Button>

            {success && (
              <p className="success-msg">
                Message sent! I’ll get back to you soon.
              </p>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;