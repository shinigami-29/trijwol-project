import styled from 'styled-components'; 

  
 const Button = () => {
    const ButtonStyle = styled.button
        `
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
`
const InputStyle = styled.input`
        width: 100%;
        padding: 10px;
        margin: 5px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        width: 50%;
`
const InputWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`

        return (
            <InputWrapper>
            <InputStyle type="text" placeholder="Enter text here" />
              <ButtonStyle>Submit</ButtonStyle>
                
            </InputWrapper>
        )
       
    
  
};
export default Button;