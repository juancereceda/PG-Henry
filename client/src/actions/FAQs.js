import axios from "axios";


export async function adminContact({ name, email, phone, subject, message }) {
  try {
    let response = await axios.post('http://localhost:3001/faqs', {
      name,
      email,
      phone,
      subject,
      message,
    })
    return response.data.message
  } catch (error) {
    console.log(error)
  }
}