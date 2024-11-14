import './App.css';  // Importing CSS file

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Section */}
        <div className="left-section">
          <div className="logo-container">
            {/* Image Source from Public Folder */}
            <img src="/tristar-logo.png" alt="Tristar Engineering & Construction Logo" className="company-logo" />
            <h2>ERP System Login</h2>
          </div>

          {/* Login Form */}
          <form action="/login" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />

            <label htmlFor="server">Server</label>
            <select id="server" name="server">
              <option value="">Select Server</option>
              <option value="server1">Server 1</option>
              <option value="server2">Server 2</option>
            </select>

            {/* Submit Button */}
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h3>Pro Tip #1</h3>
          <p>Speed up data entry by using the F4 key to automatically accept all field defaults.</p>

          {/* Image Source from Public Folder */}
          <img src="/data-entry-image.jpg" alt="Data Entry Image" className="data-entry-image" />
        </div>
      </div>
    </div>
  );
}

export default App;