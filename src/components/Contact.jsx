import React, {useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState(
    {
      firstName: '', 
      lastName: '', 
      email: '', 
      comments: '',
      agreeButton: ''
    }
    )

  const handleChange = (event) =>{
      const {name, value, type, checked} = event.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === 'checkbox'? checked : value
        }
      })
  }

  const handleSubmit = (event)=>{
      event.preventDefault()
  }

  return (
    <div className='container'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='name-container'>
            <div className='firstname'> 
              <label htmlFor="first_name">First Name</label>
              <input 
              id='first_name'
              type="text" 
              placeholder='Enter your first name'
              onChange={handleChange}
              name='firstName'
              value={formData.firstName}
              required
              />
            </div>
            <div className='lastname'> 
              <label htmlFor="last_name">Last Name</label>
              <input 
              id='last_name'
              type="text" 
              placeholder='Enter your last name'
              onChange={handleChange}
              name='lastName'
              value={formData.lastName}
              required
              />
            </div> 
          </div>
          <label htmlFor="email">Email</label>
          <input 
          id='email'
          type="email" 
          placeholder='yourname@gmail.com'
          onChange={handleChange}
          name='email'
          value={formData.email}
          required
          /> 
          <label htmlFor="message">Message</label>
          <textarea 
          id='message'
          placeholder= "send me a message and I'll reply you as soon as possible..." 
          name="comments" 
          onChange={handleChange}
          value={formData.comments} 
          cols="30" rows="10"
          required
          />
            <label 
            className='agree-container'
            htmlFor="agree"> 
              <input 
              type="checkbox" 
              onChange = {handleChange}
              checked = {formData.agreeButton}
              id = 'agree'
              name='agreeButton'
              required
              />
              <span className='agree-text'>You agree to providing your data to Al-Ameen who may contact you.</span>
            </label>
          <br />
          <button id='btn__submit'>Send message</button>
        </form>
    </div>
  )
}

export default Contact
