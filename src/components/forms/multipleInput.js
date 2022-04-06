import React, {useState, useEffect} from 'react'

const MultipleInput = () => {
    const [formValue, setFormValue] = useState({
        name : '',
        email : '',
        password : ''
    });
    const [formError, setFormError] = useState({});
    const [formSubmit, setFormSubmit] = useState(false);

    const changeInput = (e) => {
        const { value, name} = e.target

        setFormValue((prevValue)=>{
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
        setFormSubmit(true);
    }

    // useEffect(() => {
    //     console.log(formError);
    //     if(Object.keys(formError).length === 0 && formSubmit){
    //         console.log(formValue);
    //     }
    // }, [formError])

    const validate = (value) => {
        const errors = {}

        if(!value.name){
            errors.name = "Name is required"
        }

        if(!value.email){
            errors.email = "Email is required"
        }

        if(!value.password){
            errors.password = "Password is required"
        }

        return errors;
    }
  return (
    <>
        <div className='text-center'>
            <pre>
                {JSON.stringify(formValue, undefined, 2)}
            </pre>
            <form action="" onSubmit={handleSubmit}>
                {/* <h1>Hello {fullName.fName} {fullName.lName}</h1>
                <p>{fullName.email}</p> */}
                    <input 
                    type="text" 
                    placeholder='Enter name' 
                    name='name'
                    value={formValue.name} 
                    onChange={changeInput} 
                    />      
                    <div className='text-danger'>{formError.name}</div>              
                    <br /><br />
                    <input 
                    type="email" 
                    placeholder='Enter email' 
                    name='email'
                    value={formValue.email} 
                    onChange={changeInput} 
                    />
                    <div className='text-danger'>{formError.email}</div>    
                    <br /><br />
                    <input 
                    type="password" 
                    placeholder='Enter password' 
                    name='password'
                    value={formValue.password} 
                    onChange={changeInput} 
                    />
                    <div className='text-danger'>{formError.password}</div>    
                
                <div style={{marginTop: 20}}>
                    <button type='submit'>Click Me</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default MultipleInput