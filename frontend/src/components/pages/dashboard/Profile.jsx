import React from 'react'

const Profile = () => {
  return (
    <>
    <div id="profile-container">
<h3>Personal Information</h3>
<div class="form">
<form action="">
  <p><label for="firstName">First Name</label><br />
  <input type="text" required /></p>
<p><label for="lastName">Last Name</label><br />
  <input type="text" required /></p>
  <p><label for="email">Email Address</label><br />
      <input type="email" required /></p>
      <p><label for="userName">Username</label><br />
      <input type="text" required /></p>
  </form>
  <button class="btn">Save</button>
</div>
</div>
</>
)
}
export default Profile;