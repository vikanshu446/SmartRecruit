import emailjs from "@emailjs/browser";

// Function to send rejection email
const CheateEmail = (templateParams) => {
  const serviceID = "service_d9dii4i"; // Replace with your EmailJS service ID
  const templateID = "template_9kylbhi"; // Replace with your EmailJS template ID
  const publicKey = "CdjABA0yCr0jhvaY1"; // Replace with your EmailJS user ID

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export default CheateEmail;
