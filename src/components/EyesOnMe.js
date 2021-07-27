// Code EyesOnMe Component Here

function EyesOnMe() {
    
    
    return (
    <input
        onFocus={(e) => {
        console.log('Good!');
        }}
        placeholder="onFocus is triggered when you click this input."
        onBlur={(e) => {
            console.log('Hey! Eyes on me!')
    />
    

        }
    
    

export default EyesOnMe;