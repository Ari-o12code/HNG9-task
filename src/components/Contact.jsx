import React, {useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState(
    {
      firstName: '', 
      lastName: '', 
      email: '', 
      comments: '',
      employment: ''
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
    <div className='main-container'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <form className='form-container' onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input 
          id='first_name'
          type="text" 
          placeholder='First Name'
          onChange={handleChange}
          name='firstName'
          value={formData.firstName}
          /> 
          <label htmlFor="last_name">Last Name</label>
          <input 
          id='last_name'
          type="text" 
          placeholder='Last Name'
          onChange={handleChange}
          name='lastName'
          value={formData.lastName}
          />
          <label htmlFor="email">Email</label>
          <input 
          id='email'
          type="email" 
          placeholder='Email'
          onChange={handleChange}
          name='email'
          value={formData.email}
          /> 
          <label htmlFor="message">Message</label>
          <textarea 
          id='message'
          placeholder='Comments'
          name="comments" 
          onChange={handleChange}
          value={formData.comments} 
          cols="30" rows="10"/>
          <input 
          type="radio" 
          value='Unemployed'
          name='employment'
          id='Unemployed'
          onChange = {handleChange}
          checked = {formData.employment === 'Unemployed'}
          />
          <label htmlFor="Unemployed">Unemployed</label>
          <br />
          <button id='btn__submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
