const NetlifyForm=({closeForm})=>{
return(
<div className = "netlify-form-wrapper">
<form name="contact" method="POST" data-netlify="true">
<input type="hidden" name="form-name" value="contact" />
  <h2>Contact Dead Neighbors</h2>
  <p>Your Name: 
    <label><input type="text" name="name" required /></label>   
  </p>
  <p>Your Email:
    <label> <input type="email" name="email" required /></label>
  </p>
  <p>Reason For Submission:  
    <label><select name="reason" >
      <option value="Suggestion">Suggestion</option>
      <option value="Issue">Issue</option>
      <option value="Contact/General">Contact / General</option>
    </select></label>
  </p>
  <p className = "form-message">Message:
    <label ><textarea name="message" maxLength = "300" rows = "10" required></textarea></label>
  </p>
  <p>
    <button type="submit" >Submit</button>
  </p>
</form>
 <button className = "form-cancel" onClick = {closeForm}>Cancel</button>
 </div>
)
}
export default NetlifyForm;